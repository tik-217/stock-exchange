// mobx
import { observer } from 'mobx-react-lite';

// shared
import store from '@/shared/store/store';
import { createLogo } from '@/shared/helpers/createLogo';

// styles
import './TickersInfo.scss';

const TickersInfo = observer(() => {
	function declareExchange() {
		const exchange = store.informAboutTheTool.data.exchange.toLocaleLowerCase();

		if (exchange.includes('moex')) {
			return 'Московская Биржа';
		} else if (exchange.includes('spb')) {
			return 'СПБ Биржа';
		}
	}

	return (
		<div className="tickers-info">
			<div className="tickers-info__companyBlock">
				<h2 className="tickers-info__title">Информация об инструменте</h2>
				<div className="tickers-info__wrap">
					<div>
						<section className="tickers-info__company">
							<h3 className="companyName">
								{store.informAboutTheTool.data.name} {store.informAboutTheTool.data.ticker}
							</h3>
							<p>{store.informAboutTheTool.data.countryOfRiskName}</p>
						</section>
						<section className="tickers-info__sector">
							<h3 className="sectorTitle">Сектор</h3>
							<p className="sectorName">{declareExchange()}</p>
						</section>
					</div>
					<section className="tickers-info__img">
						{store.informAboutTheTool.data.brand ? (
							createLogo(store.informAboutTheTool.data, store.informAboutTheTool.data.name)
						) : (
							<>Loading</>
						)}
					</section>
				</div>
			</div>
		</div>
	);
});

export default TickersInfo;
