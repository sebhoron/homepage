import { createContext, useState } from 'react';
import { Theme, ThemeContextType } from '../@types/theme';

type Props = {
	children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<Props> = ({ children }) => {
	const [themeMode, setThemeMode] = useState<Theme>('light');

	return (
		<ThemeContext.Provider value={{ theme: themeMode, changeTheme: setThemeMode }}>
			{children}
		</ThemeContext.Provider>
	);
};
