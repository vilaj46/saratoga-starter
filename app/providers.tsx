'use client'

import { ThemeProvider } from 'next-themes'
import CONFIGURATION from '../WILD/configuration'

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
			attribute='class'
			enableSystem={false}
			defaultTheme={CONFIGURATION.colorMode}
		>
			{children}
		</ThemeProvider>
	)
}
