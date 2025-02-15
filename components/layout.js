import { Inter, Antonio } from 'next/font/google'

const interSans = Inter({
	variable: '--font-inter-sans',
	subsets: ['latin']
})

const antonioSans = Antonio({
	variable: '--font-antonio-sans',
	subsets: ['latin']
})

export default function Layout({ children }) {
	return (
		<div
			className={`${interSans.variable} ${antonioSans.variable} font-[family-name:var(--font-inter-sans)] antialiased`}
		>
			{children}
		</div>
	)
}
