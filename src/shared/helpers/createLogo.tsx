// mobx
import { toJS } from 'mobx';

// shared
import { IInstrumentInfoProps } from '@/shared/types';

export function createLogo(informAboutTheTool: IInstrumentInfoProps, name: string) {
	const imageName = toJS(informAboutTheTool).brand.logoName.split('.');

	return (
		<>
			<img src={`https://invest-brands.cdn-tinkoff.ru/${imageName[0]}x160.${imageName[1]}`} alt={`${name}`} />
		</>
	);
}
