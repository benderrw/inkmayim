import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const BlogCards = ({ posts }) => {
	const [localPosts, setLocalPosts] = useState([])

	useEffect(() => {
		setLocalPosts(posts)
	}, [posts])

	return localPosts.length ? (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{localPosts.map((post) => (
				<Card key={post.id} className="shadow-lg hover:shadow-xl transition">
					<CardContent className="p-4">
						<Image
							src={
								process.env.PUBLIC_STRAPI_URL ||
								'http://localhost:1337' + post.featuredImage.url
							}
							alt={post.featuredImage.alternativeText || ''}
							width={post.featuredImage.width}
							height={post.featuredImage.height}
							className="w-full h-48 object-cover rounded-lg mb-4"
							style={{ height: '100%' }}
						/>
						<h2 className="text-xl font-semibold">{post.title}</h2>
						<p className="text-gray-600 mb-4">{post.summary}</p>
						<Button asChild>
							<Link href={`/blog/${post.id}`}>Ler mais</Link>
						</Button>
					</CardContent>
				</Card>
			))}
		</div>
	) : (
		<div>
			<p>No posts found.</p>
		</div>
	)
}

export default BlogCards
