// react
import { useEffect } from 'react';

// mobx
import { observer } from 'mobx-react-lite';

// ui
import { Select } from '@mantine/core';

// entities
import AppMode from '@/entities/AppMode/AppMode';

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
				maxDropdownHeight={200}
				clearable
				onInput={(e) => {
					const text = (e.target as HTMLInputElement).value;

					if (text.length) {
						store.setSearchText(text);
					} else {
						store.setSelectedTicker('');
					}
				}}
				onClear={() => {
					store.setSearchText('');
					store.setSelectedTicker('');
				}}
				onChange={(e) => {
					if (!e) return;
					store.setSelectedTicker(e);
					store.setTickerName(e.split('/')[1]);
				}}
				className="search-tickers__searchInput"
			/>
			<AppMode />
		</div>
	);
});

export default SearchTickers;
