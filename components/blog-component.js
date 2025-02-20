import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious
} from '@/components/ui/pagination'

export const BlogCards = ({ posts }) => {
	const [localPosts, setLocalPosts] = useState([])

	useEffect(() => {
		setLocalPosts(posts)
	}, [posts])

	return localPosts.length ? (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{localPosts.map((post) => (
				<Card key={post.id}>
					<CardContent className="p-0">
						<Image
							src={
								process.env.PUBLIC_STRAPI_URL ||
								'http://localhost:1337' + post.featuredImage.url
							}
							alt={post.featuredImage.alternativeText || ''}
							width={post.featuredImage.width}
							height={post.featuredImage.height}
							className="w-full h-48 object-cover rounded-t-lg"
							style={{ height: '100%' }}
						/>

						<div className="w-full px-5 py-7 flex flex-col gap-1 md:gap-2">
							<h3 className="text-lg md:text-xl font-bold text-white">
								{post.title}
							</h3>
							<p className="text-xs md:text-sm text-gray-300 line-clamp-2 md:line-clamp-3">
								{post.summary}
							</p>
							<Link
								href={`/blog/${post.id}`}
								className="border border-white w-full mt-5 text-white text-sm font-bold font-[family-name:var(--font-antonio-sans)] px-4 py-4 uppercase transition-all duration-300 hover:bg-white hover:text-black flex gap-4 justify-center items-center"
							>
								Ler mais
							</Link>
						</div>
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

export const BlogPagination = ({ page, pageCount }) => {
	if (pageCount <= 1) return null

	// Função para renderizar os itens de paginação
	const renderPaginationItems = () => {
		const items = []

		// Sempre mostre a primeira página
		items.push(
			<PaginationItem key="first">
				<PaginationLink href={`?page=1`} isActive={page === 1}>
					1
				</PaginationLink>
			</PaginationItem>
		)

		// Se houver muitas páginas, use elipses
		if (page > 3) {
			items.push(
				<PaginationItem key="ellipsis-1">
					<PaginationEllipsis />
				</PaginationItem>
			)
		}

		// Páginas ao redor da página atual
		for (
			let i = Math.max(2, page - 1);
			i <= Math.min(pageCount - 1, page + 1);
			i++
		) {
			if (i <= pageCount - 1 && i >= 2) {
				items.push(
					<PaginationItem key={i}>
						<PaginationLink href={`?page=${i}`} isActive={page === i}>
							{i}
						</PaginationLink>
					</PaginationItem>
				)
			}
		}

		// Mais elipses se necessário
		if (page < pageCount - 2) {
			items.push(
				<PaginationItem key="ellipsis-2">
					<PaginationEllipsis />
				</PaginationItem>
			)
		}

		// Sempre mostre a última página se houver mais de uma página
		if (pageCount > 1) {
			items.push(
				<PaginationItem key="last">
					<PaginationLink
						href={`?page=${pageCount}`}
						isActive={page === pageCount}
					>
						{pageCount}
					</PaginationLink>
				</PaginationItem>
			)
		}

		return items
	}

	return (
		<Pagination className="col-span-full my-8">
			<PaginationContent>
				{page > 1 && (
					<PaginationItem>
						<PaginationPrevious href={`?page=${page - 1}`} />
					</PaginationItem>
				)}

				{renderPaginationItems()}

				{page < pageCount && (
					<PaginationItem>
						<PaginationNext href={`?page=${page + 1}`} />
					</PaginationItem>
				)}
			</PaginationContent>
		</Pagination>
	)
}

// Blog.js
export default function BlogComponent({ posts, children }) {
	// Clona elementos filhos e passa as props necessárias
	const childrenWithProps = React.Children.map(children, (child) => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child, { posts })
		}
		return child
	})

	return <div className="flex flex-col gap-12">{childrenWithProps}</div>
}
