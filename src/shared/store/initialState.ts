import { IChratInfo } from '@/shared/types';

const initialState = {
	selectedTicker: '',
	searchText: '',
	tickers: {
		data: [
			{
				isin: '',
				figi: '',
				ticker: '',
				classCode: '',
				instrumentType: '',
				name: '',
				uid: '',
				positionUid: '',
				instrumentKind: '',
				apiTradeAvailableFlag: false,
				forIisFlag: false,
				first1minCandleDate: '',
				first1dayCandleDate: '',
				forQualInvestorFlag: false,
				weekendFlag: false,
				blockedTcaFlag: false,
			},
		],
		loadingStatus: true,
	},
	marketDataParams: {
		figi: '',
		instrumentId: '',
	},
	candles: {
		data: [
			{
				id: 0,
				cost: '',
				time: 0,
			} as IChratInfo,
		],
		loadingStatus: true,
	},
	informAboutTheTool: {
		data: {
			figi: '',
			ticker: '',
			classCode: '',
			isin: '',
			lot: 0,
			currency: '',
			shortEnabledFlag: false,
			name: '',
			exchange: '',
			countryOfRisk: '',
			countryOfRiskName: '',
			instrumentType: '',
			tradingStatus: '',
			otcFlag: false,
			buyAvailableFlag: false,
			sellAvailableFlag: false,
			minPriceIncrement: {
				units: '',
				nano: 0,
			},
			apiTradeAvailableFlag: false,
			uid: '',
			realExchange: '',
			positionUid: '',
			assetUid: '',
			forIisFlag: false,
			forQualInvestorFlag: false,
			weekendFlag: false,
			blockedTcaFlag: false,
			instrumentKind: '',
			first1minCandleDate: '',
			first1dayCandleDate: '',
			brand: {
				logoName: '',
				logoBaseColor: '',
				textColor: '',
			},
		},
		loadingStatus: true,
	},
	tickerName: '',
};

export default initialState;
