// react
import { useEffect } from 'react';

// Highcharts
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import highchartsAccessibility from 'highcharts/modules/accessibility';

// mobx
import { observer } from 'mobx-react-lite';

// feature
import { chartOptions } from '@/feature/ChartLine/ChartLine.ui';

// shared
import store from '@/shared/store/store';

// ui
import { Box, LoadingOverlay } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

// styles
import './ChartLine.scss';

highchartsAccessibility(Highcharts);

const ChartLine = observer(() => {
	const [visible, setVisible] = useDisclosure(true);

	useEffect(() => {
		store.candles.loadingStatus ? setVisible.open() : setVisible.close();
	}, [store.candles.loadingStatus]);

	const allPrices = store.candles.data.map((el) => [new Date(el.time).getTime(), +el.cost]);

	const options = chartOptions(allPrices, store.selectedTicker, store.informAboutTheTool.data.countryOfRisk);

	return (
		<div className="chratLine">
			<Box pos={'relative'} className="chratLine_overlay">
				<LoadingOverlay visible={visible} loaderProps={{ children: 'Загрузка...' }} />
				<div className="chratLine__wrap">
					<HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={options} />
				</div>
			</Box>
		</div>
	);
});

export default ChartLine;
