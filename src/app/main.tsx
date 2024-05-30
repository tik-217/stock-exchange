// react
import React from 'react';
import ReactDOM from 'react-dom/client';

// mantine
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

// routing
import { Router } from '@/app/routing';

// ui
import { globalThemeConfig } from '@/app/main.ui';

// styles
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<MantineProvider theme={globalThemeConfig()}>
		<React.StrictMode>
			<Router />
		</React.StrictMode>
	</MantineProvider>,
);
