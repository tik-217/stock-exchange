import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), mkcert()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./_mantine";`,
			},
		},
	},
	server: {
		https: true,
		cors: {
			origin:
				'https://invest-public-api.tinkoff.ru/rest/tinkoff.public.invest.api.contract.v1.MarketDataStreamService/MarketDataStream',
			methods: 'POST',
		},
		proxy: {
			'/api': {
				target: 'https://20.205.61.143:8123',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
});
