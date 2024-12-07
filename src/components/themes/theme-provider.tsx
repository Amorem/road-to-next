import { ThemeProvider as BaseThemeProvider } from "next-themes";

export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<BaseThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
			{children}
		</BaseThemeProvider>
	);
}
