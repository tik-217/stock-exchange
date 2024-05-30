import Main from '@/pages/Main/Main';
import ChartWrap from '@/widgets/ChartWrap/ChartWrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router = () => {
	return (
		<BrowserRouter basename="/">
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/chart" element={<ChartWrap />} />
			</Routes>
		</BrowserRouter>
	);
};
