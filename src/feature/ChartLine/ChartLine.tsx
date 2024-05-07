import { Line } from 'react-chartjs-2';
import { IChratInfo } from '../../shared/types';


export default function ChartLine({ chratInfo, selectedTicker }: { chratInfo: IChratInfo[]; selectedTicker: string }) {
	const chartData = {
		labels: chratInfo.map((data) => data.time),
		datasets: [
			{
				label: selectedTicker,
				data: chratInfo.map((data) => data.cost),
				backgroundColor: ['rgba(75,192,192,1)', '&quot;#ecf0f1', '#50AF95', '#f3ba2f', '#2a71d0'],
				borderColor: 'red',
				borderWidth: 2,
				tension: 0.4,
			},
		],
	};

	return (
		<>
			<Line data={chartData}></Line>
		</>
	);
}
