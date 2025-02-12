import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Inter } from 'next/font/google'
import { ScrollbarX } from '@/components/scrollbar-x'
import { PiHandSwipeLeftLight } from 'react-icons/pi'
import { useRef, useState } from 'react'

const interSans = Inter({
	variable: '--font-inter-sans',
	subsets: ['latin']
})

export default function Home() {
	const galleryRef = useRef(null)
	const simblesRef = useRef(null)

	const [filter, setFilter] = useState('all')

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
						<div className="container mx-auto px-4 pt-6 box-border h-full flex flex-col justify-between">
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
							<div style={{ paddingBottom: '35px' }}>
								<ScrollbarX
									className="gap-10 pb-10"
									style={{ height: '190px' }}
								>
									<p className="text-white w-[250px] block flex-shrink-0 select-none text-xs">
										Esse nostrud cillum commodo magna duis. Occaecat nostrud
										officia sint ad. Esse dolore nisi minim irure culpa velit eu
										commodo esse deserunt.
									</p>
									<p className="text-white w-[250px] block flex-shrink-0 select-none text-xs">
										Esse nostrud cillum commodo magna duis. Occaecat nostrud
										officia sint ad.
									</p>
									<p className="text-white w-[250px] block flex-shrink-0 select-none text-xs">
										Esse nostrud cillum commodo magna duis. Occaecat nostrud
										officia sint ad. Esse dolore nisi minim irure culpa velit eu
										commodo esse deserunt.
									</p>
									<p className="text-white w-[250px] block flex-shrink-0 select-none text-xs">
										Esse nostrud cillum commodo magna duis. Occaecat nostrud
										officia sint ad. Esse dolore nisi minim irure culpa velit eu
										commodo esse deserunt.
									</p>
									<p className="text-white w-[250px] block flex-shrink-0 select-none text-xs">
										Esse nostrud cillum commodo magna duis. Occaecat nostrud
										officia sint ad. Esse dolore nisi minim irure culpa velit eu
										commodo esse deserunt.
									</p>
								</ScrollbarX>
								<div
									className="flex gap-2 items-center mt-6"
									style={{ marginTop: '-60px' }}
								>
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
				<section className="bg-black" id="galeria">
					<div className="container mx-auto px-4 py-20">
						<div className="flex flex-col gap-1 items-center">
							<p className="text-gray-400 text-xs text-center">
								Confira abaixo a galeria de tatuagens e inspire-se para a sua
								próxima arte corporal.
							</p>
							<h2 className="text-white text-5xl font-bold font-[family-name:var(--font-antonio-sans)] mb-10">
								Galeria de TATTOO's
							</h2>

							{/* BOTÕES DE FILTRO */}
							<div className="w-full max-w-7xl mx-auto my-12 flex flex-col flex-wrap justify-center gap-5 p-5">
								<div
									className="flex justify-center"
									style={{ marginTop: '-40px' }}
								>
									<button
										data-filter="coberturas"
										onClick={() =>
											setFilter(filter === 'coberturas' ? 'all' : 'coberturas')
										}
										className={`relative transition-transform grayscale triangle ${
											filter === 'coberturas'
												? 'scale-105 grayscale-0 z-10'
												: ''
										}`}
									>
										<Image
											src="/images/DSC_0087.jpg"
											alt="Galeria 1"
											width={200}
											height={275}
											className="object-cover w-full h-full"
										/>
										<div className="absolute top-0 left-0 w-full h-full flex flex-col align-center justify-center select-none">
											<div className="font-[family-name:var(--font-antonio-sans)] text-shadow-sm">
												Coberturas
											</div>
										</div>
									</button>
									<button
										data-filter="flash"
										onClick={() =>
											setFilter(filter === 'flash' ? 'all' : 'flash')
										}
										className={`relative transition-transform grayscale triangle inverted ${
											filter === 'flash' ? 'scale-105 grayscale-0 z-10' : ''
										}`}
									>
										<Image
											src="/images/DSC_0087.jpg"
											alt="Galeria 2"
											width={200}
											height={275}
											className="object-cover w-full h-full"
										/>
										<div className="absolute top-0 left-0 w-full h-full flex flex-col align-center justify-center select-none">
											<div className="font-[family-name:var(--font-antonio-sans)] text-shadow-sm">
												Flash
											</div>
										</div>
									</button>
									<button
										data-filter="frases"
										onClick={() =>
											setFilter(filter === 'frases' ? 'all' : 'frases')
										}
										className={`relative transition-transform grayscale triangle ${
											filter === 'frases' ? 'scale-105 grayscale-0 z-10' : ''
										}`}
									>
										<Image
											src="/images/DSC_0087.jpg"
											alt="Galeria 3"
											width={200}
											height={275}
											className="object-cover w-full h-full"
										/>
										<div className="absolute top-0 left-0 w-full h-full flex flex-col align-center justify-center select-none">
											<div className="font-[family-name:var(--font-antonio-sans)] text-shadow-sm">
												Frases
											</div>
										</div>
									</button>
									<button
										data-filter="fechamentos"
										onClick={() =>
											setFilter(
												filter === 'fechamentos' ? 'all' : 'fechamentos'
											)
										}
										className={`hidden sm:block relative transition-transform grayscale triangle inverted ${
											filter === 'fechamentos'
												? 'scale-105 grayscale-0 z-10'
												: ''
										}`}
									>
										<Image
											src="/images/DSC_0087.jpg"
											alt="Galeria 4"
											width={200}
											height={275}
											className="object-cover w-full h-full"
										/>
										<div className="absolute top-0 left-0 w-full h-full flex flex-col align-center justify-center select-none">
											<div className="font-[family-name:var(--font-antonio-sans)] text-shadow-sm">
												Fechamentos
											</div>
										</div>
									</button>
									<button
										data-filter="simbolos"
										onClick={() =>
											setFilter(filter === 'simbolos' ? 'all' : 'simbolos')
										}
										className={`hidden sm:block relative transition-transform grayscale triangle ${
											filter === 'simbolos' ? 'scale-105 grayscale-0 z-10' : ''
										}`}
									>
										<Image
											src="/images/DSC_0087.jpg"
											alt="Galeria 5"
											width={200}
											height={275}
											className="object-cover w-full h-full"
										/>
										<div className="absolute top-0 left-0 w-full h-full flex flex-col align-center justify-center select-none">
											<div className="font-[family-name:var(--font-antonio-sans)] text-shadow-sm">
												Símbolos
											</div>
										</div>
									</button>
								</div>
								<div
									className="sm:hidden flex justify-center"
									style={{ marginTop: '-40px' }}
								>
									<button
										data-filter="fechamentos"
										onClick={() =>
											setFilter(
												filter === 'fechamentos' ? 'all' : 'fechamentos'
											)
										}
										className={`relative transition-transform grayscale triangle inverted ${
											filter === 'fechamentos'
												? 'scale-105 grayscale-0 z-10'
												: ''
										}`}
									>
										<Image
											src="/images/DSC_0087.jpg"
											alt="Galeria 4"
											width={200}
											height={275}
											className="object-cover w-full h-full"
										/>
										<div className="absolute top-0 left-0 w-full h-full flex flex-col align-center justify-center select-none">
											<div className="font-[family-name:var(--font-antonio-sans)] text-shadow-sm">
												Fechamentos
											</div>
										</div>
									</button>
									<button
										data-filter="simbolos"
										onClick={() =>
											setFilter(filter === 'simbolos' ? 'all' : 'simbolos')
										}
										className={`relative transition-transform grayscale triangle ${
											filter === 'simbolos' ? 'scale-105 grayscale-0 z-10' : ''
										}`}
									>
										<Image
											src="/images/DSC_0087.jpg"
											alt="Galeria 5"
											width={200}
											height={275}
											className="object-cover w-full h-full"
										/>
										<div className="absolute top-0 left-0 w-full h-full flex flex-col align-center justify-center select-none">
											<div className="font-[family-name:var(--font-antonio-sans)] text-shadow-sm">
												Símbolos
											</div>
										</div>
									</button>
								</div>
							</div>
							{/* /BOTÕES DE FILTRO */}

							{/* GALERIAS */}
							<div
								className={`${
									filter !== 'simbolos' ? 'flex' : 'hidden'
								} flex-row flex-wrap gap-5`}
								ref={galleryRef}
							>
								<div
									className={`${
										[...filter.matchAll('coberturas|all', 'g')].length
											? 'block'
											: 'hidden'
									} text-white text-xs flex-1 basis-auto`}
									data-filter="coberturas"
								>
									<Image
										src="/images/tattoo-thumb-01.jpg"
										alt="Coberturas"
										className="object-cover"
										width={175}
										height={200}
									/>
								</div>
								<div
									className={`${
										[...filter.matchAll('flash|all', 'g')].length
											? 'block'
											: 'hidden'
									} text-white text-xs flex-1 basis-auto`}
									data-filter="flash"
								>
									<Image
										src="/images/tattoo-thumb-01.jpg"
										alt="Flash"
										className="object-cover"
										width={175}
										height={200}
									/>
								</div>
								<div
									className={`${
										[...filter.matchAll('flash|all', 'g')].length
											? 'block'
											: 'hidden'
									} text-white text-xs flex-1 basis-auto`}
									data-filter="flash"
								>
									<Image
										src="/images/tattoo-thumb-01.jpg"
										alt="Coberturas"
										className="object-cover"
										width={175}
										height={200}
									/>
								</div>
								<div
									className={`${
										[...filter.matchAll('coberturas|all', 'g')].length
											? 'block'
											: 'hidden'
									} text-white text-xs flex-1 basis-auto`}
									data-filter="coberturas"
								>
									<Image
										src="/images/tattoo-thumb-01.jpg"
										alt="Coberturas"
										className="object-cover"
										width={175}
										height={200}
									/>
								</div>
								<div
									className={`${
										[...filter.matchAll('frases|all', 'g')].length
											? 'block'
											: 'hidden'
									} text-white text-xs flex-1 basis-auto`}
									data-filter="frases"
								>
									<Image
										src="/images/tattoo-thumb-01.jpg"
										alt="Frases"
										className="object-cover"
										width={175}
										height={200}
									/>
								</div>
								<div
									className={`${
										[...filter.matchAll('fechamentos|all', 'g')].length
											? 'block'
											: 'hidden'
									} text-white text-xs flex-1 basis-auto`}
									data-filter="fechamentos"
								>
									<Image
										src="/images/tattoo-thumb-01.jpg"
										alt="Fechamentos"
										className="object-cover"
										width={175}
										height={200}
									/>
								</div>
								<div
									className={`${
										[...filter.matchAll('frases|all', 'g')].length
											? 'block'
											: 'hidden'
									} text-white text-xs flex-1 basis-auto`}
									data-filter="frases"
								>
									<Image
										src="/images/tattoo-thumb-01.jpg"
										alt="Frases"
										className="object-cover"
										width={175}
										height={200}
									/>
								</div>
								<div
									className={`${
										[...filter.matchAll('frases|all', 'g')].length
											? 'block'
											: 'hidden'
									} text-white text-xs flex-1 basis-auto`}
									data-filter="frases"
								>
									<Image
										src="/images/tattoo-thumb-01.jpg"
										alt="Frases"
										className="object-cover"
										width={175}
										height={200}
									/>
								</div>
								<div
									className={`${
										[...filter.matchAll('coberturas|all', 'g')].length
											? 'block'
											: 'hidden'
									} text-white text-xs flex-1 basis-auto`}
									data-filter="coberturas"
								>
									<Image
										src="/images/tattoo-thumb-01.jpg"
										alt="Coberturas"
										className="object-cover"
										width={175}
										height={200}
									/>
								</div>
								<div
									className={`${
										[...filter.matchAll('flash|all', 'g')].length
											? 'block'
											: 'hidden'
									} text-white text-xs flex-1 basis-auto`}
									data-filter="flash"
								>
									<Image
										src="/images/tattoo-thumb-01.jpg"
										alt="Flash"
										className="object-cover"
										width={175}
										height={200}
									/>
								</div>
								<div
									className={`${
										[...filter.matchAll('flash|all', 'g')].length
											? 'block'
											: 'hidden'
									} text-white text-xs flex-1 basis-auto`}
									data-filter="flash"
								>
									<Image
										src="/images/tattoo-thumb-01.jpg"
										alt="Flash"
										className="object-cover"
										width={175}
										height={200}
									/>
								</div>
								<div
									className={`${
										[...filter.matchAll('coberturas|all', 'g')].length
											? 'block'
											: 'hidden'
									} text-white text-xs flex-1 basis-auto`}
									data-filter="coberturas"
								>
									<Image
										src="/images/tattoo-thumb-01.jpg"
										alt="Coberturas"
										className="object-cover"
										width={175}
										height={200}
									/>
								</div>
							</div>

							<div
								className={`${
									filter === 'simbolos' ? 'flex' : 'hidden'
								} flex-row flex-wrap gap-3`}
								ref={simblesRef}
							>
								<div
									className={`${
										filter === 'simbolos' ? 'block' : 'hidden'
									} text-white text-xs flex-1 basis-auto`}
									data-filter="lideranca-justica-e-moralidade"
								>
									<Image
										src="/images/tattoo-thumb-01.jpg"
										alt="Adinkras"
										className="object-cover"
										width={175}
										height={200}
									/>
								</div>
							</div>
							{/* /GALERIAS */}
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
