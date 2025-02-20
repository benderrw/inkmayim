import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import BlogComponent, {
	BlogCards,
	BlogPagination
} from '@/components/blog-component'

export async function getServerSideProps({ query }) {
	const page = query.page ? parseInt(query.page) : 1
	const pageSize = 6

	try {
		const res = await fetch(
			`${
				process.env.PUBLIC_STRAPI_URL || 'http://localhost:1337'
			}/api/posts?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
		)
		const data = await res.json()

		return {
			props: {
				posts: data.data || [],
				page,
				pageCount: data.meta?.pagination?.pageCount || 1
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

export default function Blog({ posts, page, pageCount }) {
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
					className="z-20"
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
					<div className="flex items-end h-80 pb-14 box-border inset-0 bg-gradient-to-t from-black/100 to-transparent">
						<div className="container mx-auto px-4 box-border flex flex-col md:flex-row md:items-center gap-4">
							<div className="flex flex-col w-5/5 md:w-3/5 select-none">
								<h1
									className={`text-6xl font-bold uppercase leading-none mb-3 font-[family-name:var(--font-antonio-sans)]`}
								>
									Blog
								</h1>
								<p className="text-xs text-shadow-sm tracking-wide w-4/5">
									Aqui você encontrará uma coleção de artigos, histórias e dicas
									sobre arte, tatuagem e piercings.
								</p>
							</div>
						</div>
					</div>
				</header>

				<section className="bg-black">
					<div className="container mx-auto px-4 py-20">
						<BlogComponent posts={posts}>
							<BlogCards />
							<BlogPagination page={page} pageCount={pageCount} />
						</BlogComponent>
					</div>
				</section>
			</main>
		</>
	)
}
