// react
import { memo } from 'react';

// mantine
import { Switch, useMantineTheme, rem, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

// styles
import './AppMode.scss';

export default memo(function AppMode() {
	const theme = useMantineTheme();

	const { setColorScheme } = useMantineColorScheme({
		keepTransitions: true,
	});

	const computedColorScheme = useComputedColorScheme('light');

	function sunMode() {
		return <IconSun style={{ width: rem(16), height: rem(16) }} stroke={2.5} color={theme.colors.yellow[4]} />;
	}

	function moonMode() {
		return <IconMoonStars style={{ width: rem(16), height: rem(16) }} stroke={2.5} color={theme.colors.blue[6]} />;
	}

	return (
		<div className="appMode">
			<Switch
				size="md"
				color="dark.4"
				defaultChecked={computedColorScheme === 'dark' ? false : true}
				onLabel={sunMode()}
				offLabel={moonMode()}
				onChange={() => setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark')}
			/>
		</div>
	);
});
