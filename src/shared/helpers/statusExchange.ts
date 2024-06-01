import store from '../store/store';

export function statusExchange() {
	const startTime = new Date(store.exchangeStatus.moex.startTime).getTime();
	const endTime = new Date(store.exchangeStatus.moex.endTime).getTime();
	const isTrading = store.exchangeStatus.moex.isTrading;

	const currTime = new Date().getTime();

	if (currTime >= startTime && currTime <= endTime && isTrading) {
		return { isTrading: true, status: 'Биржа открыта' };
	}

	return { isTrading: false, status: 'Биржа не тогруется' };
}
