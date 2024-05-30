// axios
import axios from 'axios';

// key
import { authKey } from './apiKey';

const axiosConfig = axios.create({
	baseURL: 'https://invest-public-api.tinkoff.ru/rest/',
	headers: {
		'Content-Type': 'application/json',
		Authorization: authKey,
	},
	method: 'POST',
});

const getCandlesApi = '/tinkoff.public.invest.api.contract.v1.MarketDataService/GetCandles';

const findInstrument = '/tinkoff.public.invest.api.contract.v1.InstrumentsService/FindInstrument';

const apiInstrumentInfo = '/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetInstrumentBy';

export { axiosConfig, getCandlesApi, findInstrument, apiInstrumentInfo };
