// mobx
import { makeAutoObservable, runInAction } from 'mobx';

// pages
import { ISelectedTicker } from '@/shared/types';

// shared
import initialState from '@/shared/store/initialState';
import { historyExh } from '@/shared/api/restApi/historyExh';
import { getInstrumentInfo } from '@/shared/api/restApi/getInstrumentInfo';
import { searchInstrumets } from '@/shared/api/restApi/searchInstrumets';
import { getTradingSchedules } from '@/shared/api/restApi/getTradingSchedules';

class GlobalStorage {
	candles = initialState.candles;
	tickers = initialState.tickers;
	informAboutTheTool = initialState.informAboutTheTool;
	marketDataParams = initialState.marketDataParams;
	selectedTicker = initialState.selectedTicker;
	searchText = initialState.searchText;
	tickerName = initialState.tickerName;
	exchangeStatus = initialState.exchangeStaus;

	constructor() {
		makeAutoObservable(this);
	}

	async setExchangeStatus() {
		const res = await getTradingSchedules();

		runInAction(() => {
			res && res && (this.exchangeStatus = res);
		});
	}

	async setCandleHistory() {
		const res = await historyExh(this.marketDataParams);

		runInAction(() => {
			res && res && (this.candles = res);
		});
	}

	async setTickers() {
		const res = await searchInstrumets(this.searchText);

		runInAction(() => {
			res && res && (this.tickers = res);
		});
	}

	async setTickersInfo() {
		const res = await getInstrumentInfo(this.marketDataParams.instrumentId);

		runInAction(() => {
			res && res && (this.informAboutTheTool = res);
		});
	}

	setMarketDataParams(params: ISelectedTicker) {
		this.marketDataParams = params;
	}

	setSelectedTicker(selectedTicker: string) {
		this.selectedTicker = selectedTicker;
	}

	setSearchText(searchText: string) {
		this.searchText = searchText;
	}

	setTickerName(ticker: string) {
		this.tickerName = ticker;
	}
}

export default new GlobalStorage();
