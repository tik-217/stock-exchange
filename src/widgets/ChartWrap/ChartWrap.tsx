// react
import { memo, useEffect } from 'react';

// mobx
import { autorun } from 'mobx';

// feature
import ChartLine from '@/feature/ChartLine/ChartLine';

// shared
import store from '@/shared/store/store';
import { observer } from 'mobx-react-lite';

const ChartWrap = observer(() => {
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
});

export default memo(ChartWrap);
