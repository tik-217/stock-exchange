import { IInstrumentInfo, IInstrumentInfoProps } from '@/shared/types';
import { apiInstrumentInfo, axiosConfig } from '@/shared/api/restApi/api';

export const getInstrumentInfo = async (instrumentId: string) => {
	if (!instrumentId.length) return;

	let response = {} as IInstrumentInfoProps;
	let loading = false;

	const bodyRequest = {
		idType: 'INSTRUMENT_ID_TYPE_UID',
		id: instrumentId,
	};

	loading = true;

	await axiosConfig<IInstrumentInfo>(apiInstrumentInfo, {
		data: bodyRequest,
	})
		.then(({ data }) => (response = data.instrument))
		.catch((err) => console.log(err))
		.finally(() => (loading = false));

	return { data: response, loadingStatus: loading };
};
