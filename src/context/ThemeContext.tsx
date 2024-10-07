import { createContext, useEffect, useState, ReactNode } from 'react';

type ThemeContextType = 'light' | 'dark';

interface ThemeContextProps {
	theme: ThemeContextType;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
	theme: 'light',
	toggleTheme: () => { },
});

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<ThemeContextType>(() => {
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	});

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
	};

	useEffect(() => {
		const body = document.body;
		body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
