// react
import { useEffect } from 'react';

// mobx
import { observer } from 'mobx-react-lite';

// widgets
import ChartWrap from '@/widgets/ChartWrap/ChartWrap';

// feature
import SearchTickers from '@/feature/SearchTickers/SearchTickers';
import TickersInfo from '@/feature/TickersInfo/TickersInfo';

// shared
import store from '@/shared/store/store';

// styles
import './Main.scss';

const Main = observer(() => {
	useEffect(() => {
		store.setTickers();
	}, [store.searchText]);

	useEffect(() => {
		if (store.selectedTicker.length === 0) return;
		store.setTickersInfo();
	}, [store.selectedTicker]);

	useEffect(() => {
		store.setExchangeStatus();
	}, []);

	return (
		<div className="tickers">
			<h2 className="tickers-title">Бирживой поиск ценных бумаг</h2>
			<SearchTickers />
			{store.selectedTicker.length === 0 || store.searchText.length === 0 ? (
				<>Данные об эмитенте</>
			) : (
				<>
					<ChartWrap />
					<TickersInfo />
				</>
			)}
		</div>
	);
});

export default Main;
