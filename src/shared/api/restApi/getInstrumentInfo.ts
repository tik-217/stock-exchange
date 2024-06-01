import { IInstrumentInfo } from '@/shared/types';
import { apiInstrumentInfo, axiosConfig } from '@/shared/api/restApi/api';

export const getInstrumentInfo = async (instrumentId: string) => {
	if (!instrumentId.length) return;

	let response = {
		figi: '',
		ticker: '',
		classCode: '',
		isin: '',
		lot: 0,
		currency: '',
		shortEnabledFlag: false,
		name: '',
		exchange: '',
		countryOfRisk: '',
		countryOfRiskName: '',
		instrumentType: '',
		tradingStatus: '',
		otcFlag: false,
		buyAvailableFlag: false,
		sellAvailableFlag: false,
		minPriceIncrement: {
			units: '',
			nano: 0,
		},
		apiTradeAvailableFlag: false,
		uid: '',
		realExchange: '',
		positionUid: '',
		assetUid: '',
		forIisFlag: false,
		forQualInvestorFlag: false,
		weekendFlag: false,
		blockedTcaFlag: false,
		instrumentKind: '',
		first1minCandleDate: '',
		first1dayCandleDate: '',
		brand: {
			logoName: '',
			logoBaseColor: '',
			textColor: '',
		},
	};
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
