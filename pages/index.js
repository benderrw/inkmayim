import Image from 'next/image'
import { Inter } from 'next/font/google'

const interSans = Inter({
	variable: '--font-inter-sans',
	subsets: ['latin']
})

export default function Home() {
	return (
		<div
			className={`${interSans.variable} font-[family-name:var(--font-inter-sans)] flex justify-center min-h-screen`}
		>
			<main className="flex flex-col justify-center">
				<a
					href="https://www.instagram.com/inkmayim/"
					target="_blank"
					rel="noreferrer"
				>
					<Image
						className="dark:invert"
						src="/svgs/inkmayim.svg"
						alt="Inkmayim logo"
						width={180}
						height={38}
						priority
					/>
				</a>
			</main>
		</div>
	)
}
