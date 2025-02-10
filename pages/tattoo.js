import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Inter } from 'next/font/google'
import { ScrollbarX } from '@/components/scrollbar-x'
import { PiHandSwipeLeftLight } from 'react-icons/pi'

const interSans = Inter({
	variable: '--font-inter-sans',
	subsets: ['latin']
})

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

				<link
					rel="preload"
					href="/images/tattoo-banner-1792x1024.jpg"
					as="image"
				/>
			</Head>
			<main
				className={`${interSans.variable} font-[family-name:var(--font-inter-sans)]`}
			>
				<section className="relative h-full">
					<picture className="block">
						<source
							srcSet="/images/tattoo-banner-768x768.jpg"
							media="(max-width: 768px)"
						/>
						<img
							src="/images/tattoo-banner-1792x1024.jpg"
							alt="Um banner psicodélico e espiritual para um estúdio de tatuagem chamado 'Inkmayim', misturando arte de tatuagem com estética mística. A arte apresenta vibração."
							style={{
								objectFit: 'cover',
								width: '100%',
								height: '80vh',
								objectPosition: 'top center'
							}}
						/>
					</picture>

					<div className="absolute inset-0 bg-black/20 bg-gradient-to-t from-black to-transparent"></div>
					<div className="absolute top-0 bottom-0 left-0 right-0 h-full">
						<div className="container mx-auto px-4 py-6 box-border h-full flex flex-col justify-between">
							<Link href="/" className="inline-block">
								<Image
									src="/svgs/inkmayim.svg"
									alt="Inkmayim logo"
									width={80}
									height={58}
									priority
								/>
							</Link>
							<h1 className="text-5xl text-white text-shadow-lg font-bold font-[family-name:var(--font-antonio-sans)]">
								TATTOO
							</h1>
							<div>
								<ScrollbarX className="gap-10 mb-6">
									<p className="text-white w-[250px] block flex-shrink-0 select-none">
										Esse nostrud cillum commodo magna duis. Occaecat nostrud
										officia sint ad. Esse dolore nisi minim irure culpa velit eu
										commodo esse deserunt.
									</p>
									<p className="text-white w-[250px] block flex-shrink-0 select-none">
										Esse nostrud cillum commodo magna duis. Occaecat nostrud
										officia sint ad. Esse dolore nisi minim irure culpa velit eu
										commodo esse deserunt.
									</p>
									<p className="text-white w-[250px] block flex-shrink-0 select-none">
										Esse nostrud cillum commodo magna duis. Occaecat nostrud
										officia sint ad. Esse dolore nisi minim irure culpa velit eu
										commodo esse deserunt.
									</p>
									<p className="text-white w-[250px] block flex-shrink-0 select-none">
										Esse nostrud cillum commodo magna duis. Occaecat nostrud
										officia sint ad. Esse dolore nisi minim irure culpa velit eu
										commodo esse deserunt.
									</p>
									<p className="text-white w-[250px] block flex-shrink-0 select-none">
										Esse nostrud cillum commodo magna duis. Occaecat nostrud
										officia sint ad. Esse dolore nisi minim irure culpa velit eu
										commodo esse deserunt.
									</p>
								</ScrollbarX>
								<div className="flex gap-2 items-center">
									<span className="font-[family-name:var(--font-antonio-sans)]">
										SWIPE
									</span>
									<div>
										<PiHandSwipeLeftLight
											className="animate-swipe"
											style={{
												width: '24px',
												height: '24px'
											}}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="bg-black">
					<div className="container mx-auto px-4 py-6">
						<h2 className="text-white text-5xl font-bold font-[family-name:var(--font-antonio-sans)]">
							TATTOO
						</h2>
						<p className="text-white text-lg">
							Esse nostrud cillum commodo magna duis. Occaecat nostrud
						</p>
					</div>
				</section>
			</main>
		</>
	)
}
