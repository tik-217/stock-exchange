import { useEffect, useState } from 'react';
import './App.scss';
import { Select } from '@mantine/core';
import useSearchTickers from './shared/api/hooks/useSearchTickers';
import useMarketData from './shared/api/hooks/useMarketData';
import { Chart, LinearScale } from 'chart.js/auto';
import ChartLine from './feature/ChartLine/ChartLine';
import { IChratInfo } from './shared/types';
import { authKey } from './shared/api/apiKey';
import useMarketDataStream from './shared/api/hooks/useMarketDataStream';

Chart.register(LinearScale);

export default function App() {
	const [searchText, setSearchText] = useState('');
	const [selectedTicker, setSelectedTicker] = useState('');
	const [marketDataParams, setMarketDataParams] = useState('');
	const [chratInfo, setChartInfo] = useState<IChratInfo[]>([]);

	const tickers = useSearchTickers({ searchText });

	useEffect(() => {
		const tickerRes = tickers?.instruments.find((el) => `${el.name}/${el.ticker}` === selectedTicker);

		console.log(tickerRes && tickerRes.positionUid);

		tickerRes && setMarketDataParams(tickerRes.figi);
	}, [selectedTicker]);

	// const candles = useMarketData({ figi: marketDataParams });

	const streamDataMarket = useMarketDataStream({ figi: marketDataParams });

	// useEffect(() => {
	// 	console.log(candles);

	// 	if (candles.candles && !candles.candles.length) return;

	// 	const candlesList = candles.candles.map((el, i) => {
	// 		return {
	// 			id: i,
	// 			time: new Date(el.time).toString().slice(16, 21),
	// 			cost: el.close.units,
	// 		};
	// 	});

	// 	setChartInfo(candlesList);
	// }, [selectedTicker, candles]);

	return (
		<div className="tickers">
			<div className="tickers__searchInput">
				<Select
					placeholder="Название или тикер"
					data={tickers && searchText.length ? tickers.instruments.map((el) => `${el.name}/${el.ticker}`) : []}
					searchable
					limit={5}
					searchValue={searchText}
					onInput={(e) => setSearchText((e.target as HTMLInputElement).value)}
					onChange={(e) => e && setSelectedTicker(e)}
				/>
			</div>
			<div>
				<h4>ТОП РОСТА</h4>
				<ul>
					<li></li>
				</ul>
			</div>
			<ChartLine chratInfo={chratInfo} selectedTicker={selectedTicker} />
		</div>
	);
}
