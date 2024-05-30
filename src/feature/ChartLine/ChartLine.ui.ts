import { getParamByISO } from 'iso-country-currency';

export function chartOptions(allPrices: number[][], selectedTicker: string, currency: string) {
	const titleText = `${selectedTicker} | ${allPrices[allPrices.length - 1][1]} ${currency && getParamByISO(currency, 'symbol')}`;

	return {
		time: {
			timezone: 'Europe/Moscow',
		},
		chart: {
			type: 'spline',
			backgroundColor: '#202d3b',
		},
		title: {
			style: {
				color: '#cccccc',
			},
			text: titleText,
			align: 'left',
		},
		subtitle: {
			text: `${allPrices[allPrices.length - 1][1]}`,
			align: 'left',
		},
		lang: {
			accessibility: {
				defaultChartTitle: 'Dark themed Highcharts Stock demo',
			},
		},
		xAxis: {
			gridLineColor: '#21323f',
			gridLineWidth: 1,
			lineColor: '#999999',
			tickColor: '#999999',
			tickLength: 5,
			labels: {
				style: {
					color: '#c5c7c9',
				},
			},
		},
		yAxis: {
			crosshair: {
				label: {
					backgroundColor: '#fbfbfb',
					borderRadius: 0,
					enabled: true,
					padding: 3,
					style: {
						color: '#000',
					},
				},
			},
			gridLineColor: '#21323f',
			lineColor: '#999999',
			lineWidth: 1,
			labels: {
				align: 'left',
				style: {
					color: '#c5c7c9',
				},
			},
		},
		tooltip: {
			pointFormat: 'цена = {point.y}',
		},
		series: [
			{
				data: allPrices,
				tooltip: {
					valueDecimals: 2,
				},
			},
		],
		navigator: {
			enabled: false,
		},
	};
}
