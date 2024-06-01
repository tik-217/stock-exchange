import store from '../store/store';

export function declareExchange() {
	const exchange = store.informAboutTheTool.data.exchange.toLocaleLowerCase();

	if (exchange.includes('moex')) {
		return 'Московская Биржа';
	} else if (exchange.includes('spb')) {
		return 'СПБ Биржа';
	} else {
		return 'Внебиржевой инструмент';
	}
}
