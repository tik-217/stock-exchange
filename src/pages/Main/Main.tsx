// react
import { useEffect } from 'react';

// mobx
import { observer } from 'mobx-react-lite';

// widgets
import ChartWrap from '@/widgets/ChartWrap/ChartWrap';

// feature
import SearchTickers from '@/feature/SearchTickers/SearchTickers';
import TickersInfo from '@/feature/TickersInfo/TickersInfo';

// entities
import AppMode from '@/entities/AppMode/AppMode';

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

	return (
		<div className="tickers">
			<AppMode />
			<SearchTickers />
			{store.selectedTicker.length === 0 ? (
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
