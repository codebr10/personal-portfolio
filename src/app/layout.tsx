import { defaultFont } from '@/lib/fonts'
import { cn } from '@/lib/utils'

import '@/styles/globals.css'

export const metadata = {
	title: 'Personal Portfolio',
	description: '',
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 1
	}
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-br">
			<body
				className={cn(
					'min-h-screen bg-zinc-800 antialiased',
					defaultFont.variable
				)}
			>
				<main className="pb-11 pt-14">

					{children}
				</main>
			</body>
		</html>
	)
}
