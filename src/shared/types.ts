export interface IInstruments {
	instruments: IInstrument[];
}

export interface IInstrument {
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

export interface ICandles {
	candles: ICandle[];
}

export interface ICandle {
	volume: string;
	high: ICnadleCost;
	low: ICnadleCost;
	time: string;
	close: ICnadleCost;
	open: ICnadleCost;
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
	minPriceIncrement: ICnadleCost;
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

interface ICnadleCost {
	nano: number;
	units: string;
}

export interface ISelectedTicker {
	figi: string;
	instrumentId: string;
}
