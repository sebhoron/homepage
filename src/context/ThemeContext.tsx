import { createContext, useEffect, useState, ReactNode } from 'react';

type ThemeName = 'light' | 'dark';

interface ThemeContextProps {
	theme: ThemeName;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
	theme: 'dark',
	toggleTheme: () => { },
});

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<ThemeName>(() => {
		const savedTheme = localStorage.getItem('theme') as ThemeName | null;
		return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
	});

	const toggleTheme = () => {
		setTheme((prevTheme) => {
			const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
			localStorage.setItem('theme', newTheme);
			return newTheme;
		});
	};

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#334252' : '#FAFAFA');
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
