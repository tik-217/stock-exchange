// react
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// mantine
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

// ui
import { globalThemeConfig } from '@/app/main.ui';

// styles
import './main.scss';

// pages
import Main from '@/pages/Main/Main';

createRoot(document.getElementById('root')!).render(
	<MantineProvider theme={globalThemeConfig()}>
		<StrictMode>
			<Main />
		</StrictMode>
	</MantineProvider>,
);
