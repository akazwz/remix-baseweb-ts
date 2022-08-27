import type { ReactNode } from 'react'
import type { MetaFunction } from '@remix-run/cloudflare'
import { Provider as StyletronProvider } from 'styletron-react'

import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react'

import { BaseProvider, LightTheme } from 'baseui'

import { styletron } from './styletron'

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'Remix Base Web',
	viewport: 'width=device-width,initial-scale=1',
})

export interface DocumentProps{
	children: ReactNode
}

const Document = ({ children }: DocumentProps) => {
	return (
		<html lang="en">
		<head>
			<Meta />
			<Links />
			{typeof document === 'undefined' ? '__STYLES__' : null}
		</head>
		<body style={{
			margin: 0,
		}}>
		{children}
		<ScrollRestoration />
		<Scripts />
		<LiveReload />
		</body>
		</html>
	)
}

const App = () => {
	return (
		<Document>
			<StyletronProvider value={styletron}>
				<BaseProvider theme={LightTheme}>
					<Outlet />
				</BaseProvider>
			</StyletronProvider>
		</Document>
	)
}

export default App