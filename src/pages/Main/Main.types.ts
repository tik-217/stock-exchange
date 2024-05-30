export interface IMarketDataRes<T> {
	data: T;
	loadingStatus: boolean;
}

export interface ISelectedTicker {
	figi: string;
	instrumentId: string;
}
