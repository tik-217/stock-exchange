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
	high: High;
	low: Low;
	time: string;
	close: Close;
	open: Open;
	isComplete: boolean;
}

export interface High {
	nano: number;
	units: string;
}

export interface Low {
	nano: number;
	units: string;
}

export interface Close {
	nano: number;
	units: string;
}

export interface Open {
	nano: number;
	units: string;
}

export interface IChratInfo {
	id: number;
	time: string;
	cost: string;
}
