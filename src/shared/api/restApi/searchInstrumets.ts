import { IInstrument, IInstruments } from '@/shared/types';
import { axiosConfig, findInstrument } from './api';

export const searchInstrumets = async (searchText: string) => {
	if (!searchText.length) return;

	let response: IInstrument[] = [];
	let loading = false;

	const instrumentType = 'INSTRUMENT_TYPE_UNSPECIFIED';

	const bodyRequest = {
		query: searchText,
		instrumentKind: instrumentType,
		apiTradeAvailableFlag: true,
	};

	loading = true;

	await axiosConfig<IInstruments>(findInstrument, {
		data: bodyRequest,
	})
		.then(({ data }) => (response = data.instruments))
		.catch((err) => console.log(err))
		.finally(() => (loading = false));

	return { data: response, loadingStatus: loading };
};
