import Head from 'next/head'
import Image from 'next/image'
// import { poppins } from './assets/fonts'

export default function Home() {
	return (
		<>
			<Head>
				<title>Inkmayim | Arte • Tattoo • Piercing</title>
				<meta
					name="description"
					content="Inkmayim - Arte, Tattoo, Piercing, Numerologia e geometria sagrada como guias"
				/>
				<meta
					name="keywords"
					content="Inkmayim, Arte, Tattoo, Piercing, Numerologia, Geometria sagrada, Pelotas, Laranjal"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon/favicon.ico" />
			</Head>
			<div className={`antialiased`}>
				<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
					<main className="flex flex-col gap-8 row-start-2 items-center">
						<a
							href="https://www.instagram.com/inkmayim/"
							target="_blank"
							rel="noreferrer"
							aria-label="Redireciona para o Instagram da Inkmayim"
						>
							<Image
								className="dark:invert"
								src="/svgs/inkmayim.svg"
								alt="Imagem de logo da Inkmayim"
								width={180}
								height={38}
								priority
								style={{ transform: 'translateX(-11.1%)' }}
							/>
						</a>
						<p className="text-center">Em breve</p>
					</main>
				</div>
			</div>
		</>
	)
}
