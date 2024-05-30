const apiPath =
	'wss://invest-public-api.tinkoff.ru/ws/tinkoff.public.invest.api.contract.v1.MarketDataStreamService/MarketDataServerSideStream';

export const marketDataStream = new WebSocket(apiPath, 'json');
