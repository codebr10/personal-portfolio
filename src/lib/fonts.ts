import { Poppins as DefaultFont } from 'next/font/google'

export const defaultFont = DefaultFont({
	subsets: ['latin'],
	display: 'swap',
	weight: ['200', '400', '600', '800'],
	variable: '--text-font'
})
