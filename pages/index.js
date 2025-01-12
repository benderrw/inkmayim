import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const interSans = Inter({
	variable: '--font-inter-sans',
	subsets: ['latin']
})

export default function Home() {
	return (
		<>
			<Head>
				<title>
					inkmayim | Arte • Tattoo • Piercing • Numerologia • Instrumentos
					Xamânicos
				</title>
				<meta
					name="keywords"
					content="Inkmayim, tatuadora, artista visual, tatuagem, arte corporal, body piercing, numerologia, símbolos Adinkra, cultura africana, espiritualidade, Pelotas"
				/>
				<meta
					name="description"
					content="inkmayim oferece tatuagens artísticas, body piercing, numerologia e venda de instrumentos xamânicos. Conecte-se com símbolos culturais e espirituais através de flashes exclusivos, leituras personalizadas e itens únicos de espiritualidade e autoconhecimento."
				/>
				<meta
					property="og:title"
					content="inkmayim | Arte • Tattoo • Piercing • Numerologia • Instrumentos
					Xamânicos"
				/>
				<meta
					property="og:description"
					content="inkmayim oferece tatuagens artísticas, body piercing, numerologia e venda de instrumentos xamânicos. Conecte-se com símbolos culturais e espirituais através de flashes exclusivos, leituras personalizadas e itens únicos de espiritualidade e autoconhecimento."
				/>

				<meta property="og:url" content="https://www.inkmayim.com.br" />
				<meta property="og:type" content="website" />
			</Head>
			<div
				className={`${interSans.variable} font-[family-name:var(--font-inter-sans)] flex justify-center min-h-screen`}
			>
				<main className="flex flex-col items-center justify-center">
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
		</>
	)
}
