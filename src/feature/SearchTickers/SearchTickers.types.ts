import { Instruments } from '@/shared/types';

export interface ISearchTickers {
	searchText: string;
	tickers: Instruments;
	setSearchText: (value: string) => void;
	setSelectedTicker: (value: string) => void;
}
