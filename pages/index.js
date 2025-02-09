import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Services from '@/components/services'

export default function Home() {
	return (
		<>
			<Head>
				<title>inkmayim | Arte • Tattoo • Piercing</title>
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
					content="inkmayim | Arte • Tattoo • Piercing
					Xamânicos"
				/>
				<meta
					property="og:description"
					content="inkmayim oferece tatuagens artísticas, body piercing, numerologia e venda de instrumentos xamânicos. Conecte-se com símbolos culturais e espirituais através de flashes exclusivos, leituras personalizadas e itens únicos de espiritualidade e autoconhecimento."
				/>

				<meta property="og:url" content="https://www.inkmayim.com.br" />
				<meta property="og:type" content="website" />

				<link rel="preload" href="/images/20241222_192429.jpg" as="image" />
				<link rel="preload" href="/images/DSC_0913.jpg" as="image" />
				<link rel="preload" href="/images/DSC_0515.jpg" as="image" />
				<link rel="preload" href="/images/DSC_0087.jpg" as="image" />
			</Head>
			<main
				className={`flex flex-col h-screen relative overflow-hidden pb-20 md:pb-8 box-border`}
				style={{
					backgroundImage: 'url(/images/20241222_192429.jpg)',
					backgroundSize: 'cover',
					backgroundPosition: 'center'
				}}
			>
				<header>
					<div className="container mx-auto px-4 py-6">
						<Link href="/" className="inline-block">
							<Image
								src="/svgs/inkmayim.svg"
								alt="Inkmayim logo"
								width={80}
								height={58}
								priority
							/>
						</Link>
					</div>
				</header>

				<div className="flex items-end h-full">
					<div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center gap-4">
						<div className="flex flex-col w-5/5 md:w-3/5">
							<div className="text-base">Artista</div>
							<h1
								className={`text-6xl font-bold uppercase leading-none mb-3 font-[family-name:var(--font-antonio-sans)]`}
							>
								Katlene
								<br />
								Basílio Torres
							</h1>
							<p className="text-xs text-shadow-sm tracking-wide w-4/5">
								Tatuadora e artista visual com uma trajetória voltada para
								expressar, por meio da arte, a conexão com o corpo, mente e
								espírito.
							</p>
						</div>
						<div
							className="flex gap-4 md:w-2/5 relative"
							style={{ height: '250px' }}
						>
							<Services />
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
