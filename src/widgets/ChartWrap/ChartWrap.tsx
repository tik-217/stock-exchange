// react
import { useEffect } from 'react';

// mobx
import { autorun } from 'mobx';

// feature
import ChartLine from '@/feature/ChartLine/ChartLine';

// shared
import store from '@/shared/store/store';

export default function ChartWrap() {
	useEffect(() => {
		autorun(() => {
			store.setCandleHistory();
		});
		const intervalCall = setInterval(() => {
			store.setCandleHistory();
		}, 1000 * 60);

		return () => clearInterval(intervalCall);
	}, [store.marketDataParams]);

	return <>{store.selectedTicker && <ChartLine />}</>;
}
