import { Candles } from '@/shared/types';
import { axiosConfig, getCandlesApi } from '@/shared/api/restApi/api';

export const historyExh = async ({ figi, instrumentId }: { figi: string; instrumentId: string }) => {
	if (!figi.length || !instrumentId.length) return;

	let candles: Candles = { candles: [] };
	let response = [
		{
			id: 0,
			cost: '',
			time: 0,
		},
	];
	let candlesIsLoading = false;

	let startDate = new Date();
	startDate.setDate(startDate.getDate() - 1);

	const bodyRequest = {
		figi,
		from: startDate.toISOString(),
		to: new Date().toISOString(),
		interval: 'CANDLE_INTERVAL_10_MIN',
		instrumentId,
	};

	candlesIsLoading = true;

	await axiosConfig(getCandlesApi, {
		data: bodyRequest,
	})
		.then(({ data }) => {
			candles = data;
		})
		.catch((err) => console.log(err))
		.finally(() => (candlesIsLoading = false));

	response = candles.candles.map((el, i) => {
		const time = new Date(el.time).getTime();

		return {
			id: Date.now() + i,
			cost: el.close.units,
			time: time,
		};
	});

	return { data: response, loadingStatus: candlesIsLoading };
};
