import { useEffect, useState } from 'react';
import { Candles } from '../../types';
import { authKey } from '../apiKey';

export default function useMarketData({ figi }: { figi: string }) {
	const [candleHistory, setCandleHistory] = useState<Candles>({ candles: [] });

	const apiPath =
		'https://invest-public-api.tinkoff.ru/rest/tinkoff.public.invest.api.contract.v1.MarketDataService/GetCandles';

	useEffect(() => {
		(async () => {
			if (!figi.length) return;

			let date = new Date();

			const bodyRequest = {
				figi,
				from: '2024-05-02T20:07:47.888Z',
				to: date.toISOString(),
				interval: 'CANDLE_INTERVAL_15_MIN',
				candleSourceType: 'CANDLE_INTERVAL_15_MIN',
			};

			await fetch(apiPath, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: authKey,
				},
				body: JSON.stringify(bodyRequest),
			})
				.then((data) => data.json())
				.then((data) => setCandleHistory(data))
				.catch((err) => console.log(err));
		})();
	}, [figi]);

	return candleHistory;
}
