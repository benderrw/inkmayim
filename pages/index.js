import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Accordion from '@/components/accordion'
import Workspace from '@/components/workspace'
import Navigation from '@/components/navigation'
import FormContact from '@/components/form-contact'
import PostCards from '@/components/post-cards'

export async function getServerSideProps() {
	try {
		const [postsRes, collectionsRes, imagesRes] = await Promise.all([
			fetch(
				`${
					process.env.PUBLIC_STRAPI_URL || 'http://localhost:1337'
				}/api/posts?sort=createdAt:desc&pagination[limit]=3&fields[0]=title&fields[1]=summary&fields[2]=slug&populate=featuredImage`
			),
			fetch(
				`${
					process.env.PUBLIC_STRAPI_URL || 'http://localhost:1337'
				}/api/collections?populate=*`
			),
			fetch(
				`${
					process.env.PUBLIC_STRAPI_URL || 'http://localhost:1337'
				}/api/workspaces?populate=*&sort=createdAt:desc`
			)
		])

		const [posts, collections, images] = await Promise.all([
			postsRes.json(),
			collectionsRes.json(),
			imagesRes.json()
		])

		return {
			props: {
				posts: posts.data,
				collections: collections.data,
				images: images.data
			}
		}
	} catch (error) {
		console.error('Erro ao buscar dados:', error)

		return {
			props: {
				posts: [],
				collections: [],
				images: []
			}
		}
	}
}

export default function Home({ posts, collections, images }) {
	const faqItems = [
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
	]

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
			</Head>
			<main className={`flex flex-col box-border relative overflow-hidden`}>
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
							<Navigation />
						</div>
					</div>
					<div className="flex items-end h-screen box-border pb-28 inset-0 bg-gradient-to-t from-black/100 to-transparent">
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
								<Link
									href="#contato"
									className="border border-white text-white text-xl font-bold font-[family-name:var(--font-antonio-sans)] text-center px-4 py-4 mt-12 uppercase transition-all duration-300 hover:bg-white hover:text-black"
								>
									Contato
								</Link>
							</div>
						</div>
					</div>
				</header>
				<section id="sobre">
					<div className="container mx-auto px-4 py-20">
						<div className="flex flex-row gap-12">
							<div className="w-2/5 hidden md:block">
								<Image
									src="/images/DSC_0913.jpg"
									width={3264}
									height={4928}
									alt=""
									className="w-full object-cover"
									style={{ aspectRatio: '1/1.25' }}
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
						<div className="flex flex-col items-center">
							<h2 className="text-white text-5xl text-center uppercase font-bold font-[family-name:var(--font-antonio-sans)] mb-12">
								Galeria
							</h2>
							<p className="text-sm text-gray-400 text-center mb-10">
								Confira abaixo a galeria de tatuagens e inspire-se para a sua
								próxima arte corporal.
							</p>
							<Workspace collections={collections} images={images} />
						</div>
					</div>
				</section>
				<section className="" id="duvidas">
					<div className="container mx-auto px-4 py-20">
						<h2 className="text-white text-5xl text-center uppercase font-bold font-[family-name:var(--font-antonio-sans)] mb-12">
							Dúvidas Frequentes
						</h2>
						<Accordion items={faqItems} />
					</div>
				</section>
				<section className="bg-black" id="blog">
					<div className="container mx-auto px-4 py-20">
						<h2 className="text-white text-5xl text-center uppercase font-bold font-[family-name:var(--font-antonio-sans)] mb-12">
							Últimos Posts
						</h2>
						<PostCards posts={posts} />
						<div className="flex justify-center text-center mt-10">
							<Link
								href={`/blog`}
								className="border border-white w-full md:w-1/2 lg:w-1/3 mt-5 text-white text-xl font-bold font-[family-name:var(--font-antonio-sans)] px-4 py-4 uppercase transition-all duration-300 hover:bg-white hover:text-black flex gap-4 justify-center items-center"
							>
								Ver todos os posts
							</Link>
						</div>
					</div>
				</section>
				{/* <section className="" id="eventos">
					<div className="container mx-auto px-4 py-20">
						<h2 className="text-white text-5xl text-center uppercase font-bold font-[family-name:var(--font-antonio-sans)] mb-12">
							Eventos
						</h2>
					</div>
				</section> */}
				<section className="" id="contato">
					<div className="container mx-auto px-4 py-20">
						<h2 className="text-white text-5xl text-center uppercase font-bold font-[family-name:var(--font-antonio-sans)] mb-12">
							Entre em contato
						</h2>
						<p className="text-sm text-gray-400 text-center mb-6">
							Tem dúvidas ou quer marcar um horário? Me envie uma mensagem!
						</p>
						<FormContact />
					</div>
				</section>
			</main>
		</>
	)
}
