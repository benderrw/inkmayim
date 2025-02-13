import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { ScrollbarXViewport } from '@/components/scrollbar-x'
import { useState } from 'react'
import Accordion from '@/components/accordion'

export default function Home() {
	const [isOpen, setIsOpen] = useState(false)
	const [filter, setFilter] = useState('simbolos')

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
				className={`flex flex-col pb-20 md:pb-8 box-border relative overflow-hidden`}
			>
				<header
					className="h-screen z-20"
					style={{
						backgroundImage: 'url(/images/20241222_192429.jpg)',
						backgroundSize: 'cover',
						backgroundPosition: 'center'
					}}
				>
					<div className="fixed w-full bg-black/50">
						<div className="container mx-auto px-4 py-6 box-border flex justify-between items-center h-28 backdrop-blur-sm">
							<Link href="/" className="inline-block">
								<Image
									src="/svgs/inkmayim.svg"
									alt="Inkmayim logo"
									width={80}
									height={58}
									priority
								/>
							</Link>
							<nav className="relative">
								{/* HAMBURGUER BUTTON */}
								<button
									onClick={() => setIsOpen(!isOpen)}
									className={`md:hidden relative p-4 space-y-2 focus:outline-none ${
										isOpen ? 'z-50' : ''
									}`}
									aria-label="Toggle menu"
								>
									<span
										className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${
											isOpen ? 'rotate-45 translate-y-2.5' : ''
										}`}
									/>
									<span
										className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ${
											isOpen ? 'opacity-0' : ''
										}`}
									/>
									<span
										className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${
											isOpen ? '-rotate-45 -translate-y-2.5' : ''
										}`}
									/>
								</button>

								{/* OVERLAY */}
								<div className=""></div>
								<div
									className={`md:hidden fixed h-screen inset-0 bg-black/50 transition-opacity duration-300 ${
										isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
									}`}
									onClick={() => setIsOpen(false)}
								/>

								{/* MENU ITEMS */}
								<menu
									className={`fixed right-0 top-28 h-screen w-64 backdrop-blur-sm transition-transform duration-300 transform z-50 ${
										isOpen ? 'translate-x-0' : 'translate-x-full'
									} md:static md:translate-x-0 md:h-auto md:w-auto md:backdrop-blur-none`}
								>
									<ul className="font-[family-name:var(--font-antonio-sans)] py-4 md:flex">
										<li>
											<a
												href="#sobre"
												className="block px-4 py-2 text-xl uppercase bg-transparent text-white border border-transparent transition-all duration-300 border-b-white border-t-white md:border-0 hover:bg-white hover:text-black md:hover:text-black"
												title=""
											>
												Sobre
											</a>
										</li>
										<li>
											<a
												href="#galeria"
												className="block px-4 py-2 text-xl uppercase bg-transparent text-white border border-transparent transition-all duration-300 border-b-white md:border-0 hover:bg-white hover:text-black md:hover:text-black"
												title=""
											>
												Galeria
											</a>
										</li>
										<li>
											<a
												href="#duvidas"
												className="block px-4 py-2 text-xl uppercase bg-transparent text-white border border-transparent transition-all duration-300 border-b-white md:border-0 hover:bg-white hover:text-black md:hover:text-black"
												title=""
											>
												Dúvidas
											</a>
										</li>
										<li>
											<a
												href="#blog"
												className="block px-4 py-2 text-xl uppercase bg-transparent text-white border border-transparent transition-all duration-300 border-b-white md:border-0 hover:bg-white hover:text-black md:hover:text-black"
												title=""
											>
												Blog
											</a>
										</li>
										<li>
											<a
												href="#eventos"
												className="block px-4 py-2 text-xl uppercase bg-transparent text-white border border-transparent transition-all duration-300 border-b-white md:border-0 hover:bg-white hover:text-black md:hover:text-black"
												title=""
											>
												Eventos
											</a>
										</li>
										<li>
											<a
												href="#orcamento"
												className="block px-4 py-2 text-xl uppercase bg-transparent text-white border border-transparent transition-all duration-300 border-b-white md:border-0 hover:bg-white hover:text-black md:hover:text-black"
												title=""
											>
												Orçamento
											</a>
										</li>
										<li>
											<a
												href="#contato"
												className="block px-4 py-2 text-xl uppercase bg-transparent text-white border border-transparent transition-all duration-300 border-b-white md:border-0 hover:bg-white hover:text-black md:hover:text-black"
												title=""
											>
												Contato
											</a>
										</li>
									</ul>
								</menu>
							</nav>
						</div>
					</div>
					<div className="flex items-end h-screen box-border pb-32 inset-0 bg-gradient-to-t from-black/100 to-transparent">
						<div className="container mx-auto px-4 box-border flex flex-col md:flex-row md:items-center gap-4">
							<div className="flex flex-col w-5/5 md:w-3/5 select-none">
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
								<button className="border border-white text-white text-xl font-bold font-[family-name:var(--font-antonio-sans)] px-4 py-4 mt-12 uppercase transition-all duration-300 hover:bg-white hover:text-black">
									Orçamento
								</button>
							</div>
						</div>
					</div>
				</header>
				<section id="sobre">
					<div className="container mx-auto px-4 py-20">
						<div className="flex flex-row gap-12">
							<div className="w-2/5 hidden md:block">
								<Image
									src=""
									width={150}
									height={150}
									alt=""
									className="w-full"
								/>
							</div>
							<div className="w-full md:w-3/5">
								<h2 className="text-white text-5xl text-center uppercase font-bold font-[family-name:var(--font-antonio-sans)] mb-12">
									Sobre
								</h2>
								<p className="text-white text-sm">
									Ipsum labore ea do non laboris elit. Id eiusmod irure mollit
									ea quis consequat adipisicing ea ad sint sint. Do voluptate
									quis ullamco qui ullamco esse ex magna et ut deserunt veniam.
									Aute nostrud velit laborum est anim eiusmod tempor ea. Est
									cillum in ea adipisicing deserunt eu cupidatat elit Lorem et
									qui.
								</p>
								<p className="text-white text-sm mt-5">
									Ipsum labore ea do non laboris elit. Id eiusmod irure mollit
									ea quis consequat adipisicing ea ad sint sint. Do voluptate
									quis ullamco qui ullamco esse ex magna et ut deserunt veniam.
									Aute nostrud velit laborum est anim eiusmod tempor ea. Est
									cillum in ea adipisicing deserunt eu cupidatat elit Lorem et
									qui.
								</p>
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
							<h2 className="text-white text-5xl uppercase font-bold font-[family-name:var(--font-antonio-sans)] mb-10">
								Galeria
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
										data-filter="personalizados"
										onClick={() =>
											setFilter(
												filter === 'personalizados' ? 'all' : 'personalizados'
											)
										}
										className={`hidden sm:block relative transition-transform grayscale triangle inverted ${
											filter === 'personalizados'
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
												Personalizados
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
										data-filter="personalizados"
										onClick={() =>
											setFilter(
												filter === 'personalizados' ? 'all' : 'personalizados'
											)
										}
										className={`relative transition-transform grayscale triangle inverted ${
											filter === 'personalizados'
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
												Personalizados
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
							<div className="flex flex-row flex-wrap gap-5">
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
										[...filter.matchAll('personalizados|all', 'g')].length
											? 'block'
											: 'hidden'
									} text-white text-xs flex-1 basis-auto`}
									data-filter="personalizados"
								>
									<Image
										src="/images/tattoo-thumb-01.jpg"
										alt="Personalizados"
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
				<section className="" id="duvidas">
					<div className="container mx-auto px-4 py-20">
						<h2 className="text-white text-5xl text-center uppercase font-bold font-[family-name:var(--font-antonio-sans)] mb-12">
							Dúvidas Frequentes
						</h2>
						<Accordion
							items={[
								{
									title: 'Como funciona a entrega?',
									content:
										'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nunc nisl aliquet nunc.'
								},
								{
									title: 'Como funciona a entrega?',
									content:
										'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nunc nisl aliquet nunc.'
								},
								{
									title: 'Como funciona a entrega?',
									content:
										'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nunc nisl aliquet nunc.'
								},
								{
									title: 'Como funciona a entrega?',
									content:
										'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nunc nisl aliquet nunc.'
								}
							]}
						/>
					</div>
				</section>
				<section className="bg-black" id="blog">
					<div className="container mx-auto px-4 py-20">
						<h2 className="text-white text-5xl text-center uppercase font-bold font-[family-name:var(--font-antonio-sans)] mb-12">
							Blog
						</h2>
					</div>
				</section>
			</main>
		</>
	)
}
