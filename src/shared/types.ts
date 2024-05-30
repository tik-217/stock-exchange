export interface Instruments {
	instruments: Instrument[];
}

export interface Instrument {
	isin: string;
	figi: string;
	ticker: string;
	classCode: string;
	instrumentType: string;
	name: string;
	uid: string;
	positionUid: string;
	instrumentKind: string;
	apiTradeAvailableFlag: boolean;
	forIisFlag: boolean;
	first1minCandleDate: string;
	first1dayCandleDate: string;
	forQualInvestorFlag: boolean;
	weekendFlag: boolean;
	blockedTcaFlag: boolean;
}

export interface Candles {
	candles: Candle[];
}

export interface Candle {
	volume: string;
	high: CnadleCost;
	low: CnadleCost;
	time: string;
	close: CnadleCost;
	open: CnadleCost;
	isComplete: boolean;
}

export interface IChratInfo {
	id: number;
	cost: string;
	time: number;
}

export interface IInstrumentInfo {
	instrument: IInstrumentInfoProps;
}

export interface IInstrumentInfoProps {
	figi: string;
	ticker: string;
	classCode: string;
	isin: string;
	lot: number;
	currency: string;
	shortEnabledFlag: boolean;
	name: string;
	exchange: string;
	countryOfRisk: string;
	countryOfRiskName: string;
	instrumentType: string;
	tradingStatus: string;
	otcFlag: boolean;
	buyAvailableFlag: boolean;
	sellAvailableFlag: boolean;
	minPriceIncrement: CnadleCost;
	apiTradeAvailableFlag: boolean;
	uid: string;
	realExchange: string;
	positionUid: string;
	assetUid: string;
	forIisFlag: boolean;
	forQualInvestorFlag: boolean;
	weekendFlag: boolean;
	blockedTcaFlag: boolean;
	instrumentKind: string;
	first1minCandleDate: string;
	first1dayCandleDate: string;
	brand: {
		logoName: string;
		logoBaseColor: string;
		textColor: string;
	};
}

interface CnadleCost {
	nano: number;
	units: string;
}
