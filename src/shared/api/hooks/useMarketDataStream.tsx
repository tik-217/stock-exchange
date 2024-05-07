import { useEffect, useState } from 'react';
import { authKey } from '../apiKey';
import axios from 'axios';
import { io } from 'socket.io-client';

export default function useMarketDataStream({ figi }: { figi: string }) {
	const [marketDataStream, setMarketDataStream] = useState();

	const apiPath =
		'wss://invest-public-api.tinkoff.ru/ws/tinkoff.public.invest.api.contract.v1.MarketDataStreamService/MarketDataStream';

	console.log(figi);

	useEffect(() => {
		(async () => {
			if (!figi.length) return;

			const bodyRequest = {
				subscribeTradesRequest: {
					subscriptionAction: 'SUBSCRIPTION_TRADES_REQUEST',
					instruments: [
						{
							figi,
							interval: 'SUBSCRIPTION_INTERVAL_ONE_DAY',
							// instrumentId: figi,
						},
					],
					waitingClose: true,
				},
			};

			const socket = io(apiPath, {
				withCredentials: true,
				protocols: 'json',
				extraHeaders: {
					'Access-Control-Allow-Origin': 'https://localhost:5173/',
				},
				auth: {
					token: authKey,
				},
				query: bodyRequest,
			});

			console.log(socket);

			socket.io.on('error', (error) => {
				socket.disconnect();
			});

			// const ws = new WebSocket(apiPath, {
			// 	'Content-Type': 'application/json',
			// 	'Web-Socket-Protocol': 'json',
			// }).then((data) => console.log(data));

			return () => socket.close();
		})();
	}, [figi]);

	return marketDataStream;
}
