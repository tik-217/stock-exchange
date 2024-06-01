import { getParamByISO } from 'iso-country-currency';
import { statusExchange } from '@/shared/helpers/statusExchange';

export function chartOptions(allPrices: number[][], selectedTicker: string, currency: string) {
	const exchStatus = statusExchange();
	let titleText = '';

	if (allPrices.length) {
		titleText = `
			${selectedTicker} |
			${allPrices[allPrices.length - 1][1]} 
			${currency && getParamByISO(currency, 'symbol')}
		`;
	} else {
		titleText = selectedTicker;
	}

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
			text: exchStatus.status,
			style: {
				color: exchStatus.isTrading ? '#0ec548' : '#ec2e2e',
			},
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
		rangeSelector: {
			selected: 1,
			buttons: [
				{
					type: 'month',
					count: 1,
					text: '1m',
					title: 'View 1 month',
				},
				{
					type: 'month',
					count: 3,
					text: '3m',
					title: 'View 3 months',
				},
				{
					type: 'month',
					count: 6,
					text: '6m',
					title: 'View 6 months',
				},
				{
					type: 'ytd',
					text: 'YTD',
					title: 'View year to date',
				},
				{
					type: 'year',
					count: 1,
					text: '1y',
					title: 'View 1 year',
				},
			],
		},
		series: [
			{
				data: allPrices,
				tooltip: {
					valueDecimals: 2,
				},
			},
		],
	};
}
