// react
import { useEffect } from 'react';

// mobx
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';

// ui
import { Select } from '@mantine/core';

// shared
import store from '@/shared/store/store';

// styles
import './SearchTickers.scss';

const SearchTickers = observer(() => {
	useEffect(() => {
		const checkedInstrument = store.tickers.data.find((el) => el.ticker === store.tickerName);

		checkedInstrument &&
			store.setMarketDataParams({ figi: checkedInstrument.figi, instrumentId: checkedInstrument.uid });
	}, [store.selectedTicker]);

	return (
		<div className="search-tickers">
			<Select
				placeholder="Название или тикер"
				data={store.tickers && store.searchText.length ? store.tickers.data.map((el) => `${el.name}/${el.ticker}`) : []}
				searchable
				limit={5}
				clearable
				value={store.searchText}
				onInput={(e) => {
					store.setSearchText((e.target as HTMLInputElement).value);
				}}
				onChange={(e) => {
					if (e === null) {
						store.setSelectedTicker('');
						store.setSearchText('');
					} else {
						store.setSelectedTicker(e);
						store.setSearchText(e);
						store.setTickerName(e.split('/')[1]);
						console.log(toJS(store.tickers.data));
					}
				}}
				className="search-tickers__searchInput"
			/>
		</div>
	);
});

export default SearchTickers;
