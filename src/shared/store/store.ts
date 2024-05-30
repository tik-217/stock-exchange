// mobx
import { makeAutoObservable, runInAction } from 'mobx';

// pages
import { ISelectedTicker } from '@/pages/Main/Main.types';

// shared
import initialState from '@/shared/store/initialState';
import { historyExh } from '@/shared/api/restApi/historyExh';
import { getInstrumentInfo } from '@/shared/api/restApi/getInstrumentInfo';
import { searchInstrumets } from '@/shared/api/restApi/searchInstrumets';

class GlobalStorage {
	candles = initialState.candles;
	tickers = initialState.tickers;
	informAboutTheTool = initialState.informAboutTheTool;
	marketDataParams = initialState.marketDataParams;
	selectedTicker = initialState.selectedTicker;
	searchText = initialState.searchText;
	tickerName = initialState.tickerName;

	constructor() {
		makeAutoObservable(this);
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
