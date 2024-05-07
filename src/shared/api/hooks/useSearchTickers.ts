import { useEffect, useState } from 'react';
import { Instruments } from '../../types';
import { authKey } from '../apiKey';

export default function useSearchTickers({ searchText }: { searchText: string }) {
	const [tickers, setTickers] = useState<Instruments>();
	const [instrumentType] = useState('INSTRUMENT_TYPE_SHARE');

	const apiPath =
		'https://invest-public-api.tinkoff.ru/rest/tinkoff.public.invest.api.contract.v1.InstrumentsService/FindInstrument';

	useEffect(() => {
		(async () => {
			if (!searchText.length) return;

			const bodyRequest = {
				query: searchText,
				instrumentKind: instrumentType,
				apiTradeAvailableFlag: true,
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
				.then((data) => setTickers(data))
				.catch((err) => console.log(err));
		})();
	}, [searchText]);

	return tickers;
}
