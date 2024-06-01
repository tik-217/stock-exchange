import { apiTradingSchedules, axiosConfig } from './api';

export async function getTradingSchedules() {
	const exchangeStatus = {
		moex: {
			isTrading: true,
			startTime: '',
			endTime: '',
		},
		spb: {
			isTrading: true,
			startTime: '',
			endTime: '',
		},
	};

	const dateISO = new Date().toISOString();

	const moex = axiosConfig(apiTradingSchedules, {
		data: {
			exchange: 'MOEX',
			from: dateISO,
			to: dateISO,
		},
	});

	const spb = axiosConfig(apiTradingSchedules, {
		data: {
			exchange: 'SPB',
			from: dateISO,
			to: dateISO,
		},
	});

	const allExch = await Promise.all([moex, spb]);

	allExch.forEach((el) => {
		const exchName: 'moex' | 'spb' = el.data.exchanges[0].exchange.toLowerCase();

		const isTrading = el.data.exchanges[0].days[0].isTradingDay;
		const startTime = el.data.exchanges[0].days[0].startTime;
		const endTime = el.data.exchanges[0].days[0].endTime;

		exchangeStatus[exchName] = {
			isTrading,
			startTime,
			endTime,
		};
	});

	return exchangeStatus;
}
