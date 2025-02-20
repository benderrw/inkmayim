import { Inter, Antonio } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'

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
			className={`${interSans.variable} ${antonioSans.variable} font-[family-name:var(--font-inter-sans)] antialiased dark`}
		>
			{children}
			<Toaster richColors position="bottom-left" />
		</div>
	)
}
