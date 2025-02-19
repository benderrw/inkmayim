import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'

const BlogCardGrid = ({ posts }) => {
	const [localPosts, setLocalPosts] = useState([])

	useEffect(() => {
		setLocalPosts(posts)
	}, [posts])

	return localPosts.length ? (
		<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
			{/* Main featured card - full width on mobile, half width on desktop */}
			<Card className="w-full h-64 md:h-80 overflow-hidden">
				<CardContent className="p-0 h-full">
					<Link
						href={`/blog/${localPosts[0].slug}`}
						className="relative block h-full"
					>
						<div className="relative h-full w-full">
							<Image
								src={
									process.env.PUBLIC_STRAPI_URL ||
									'http://localhost:1337' + localPosts[0].featuredImage.url
								}
								alt={localPosts[0].featuredImage.alternativeText || ''}
								width={localPosts[0].featuredImage.width}
								height={localPosts[0].featuredImage.height}
								className="object-cover"
								style={{ height: '100%' }}
							/>
							<div className="absolute bottom-0 w-full p-3 md:p-4 bg-black/65 flex flex-col gap-1 md:gap-2">
								<h3 className="text-lg md:text-xl font-bold text-white">
									{localPosts[0].title}
								</h3>
								<p className="text-xs md:text-sm text-gray-300 line-clamp-2 md:line-clamp-3">
									{localPosts[0].summary}
								</p>
							</div>
						</div>
					</Link>
				</CardContent>
			</Card>

			{/* Column with two cards - stacked layout */}
			{localPosts.length > 1 && (
				<div className="flex flex-col gap-4">
					{/* First smaller card */}
					<Card className="w-full h-48 md:h-36 overflow-hidden">
						<CardContent className="p-0 h-full">
							<Link
								href={`/blog/${localPosts[1].slug}`}
								className="block h-full relative overflow-hidden"
							>
								<div className="flex h-full">
									<div className="w-1/2 relative">
										<Image
											src={
												process.env.PUBLIC_STRAPI_URL ||
												'http://localhost:1337' +
													localPosts[1].featuredImage.url
											}
											alt={localPosts[1].featuredImage.alternativeText || ''}
											width={localPosts[1].featuredImage.width}
											height={localPosts[1].featuredImage.height}
											className="object-cover"
											style={{ height: '100%' }}
										/>
									</div>
									<div className="w-1/2 p-2 md:p-3 flex flex-col gap-1 bg-black/65">
										<h3 className="text-sm md:text-lg font-bold leading-tight text-white">
											{localPosts[1].title}
										</h3>
										<p className="text-xs text-gray-300 line-clamp-2 md:line-clamp-3">
											{localPosts[1].summary}
										</p>
									</div>
								</div>
							</Link>
						</CardContent>
					</Card>

					{/* Second smaller card */}
					{localPosts.length === 3 && (
						<Card className="w-full h-48 md:h-36 overflow-hidden">
							<CardContent className="p-0 h-full">
								<Link
									href={`/blog/${localPosts[2].slug}`}
									className="block h-full relative overflow-hidden"
								>
									<div className="flex h-full">
										<div className="w-1/2 relative">
											<Image
												src={
													process.env.PUBLIC_STRAPI_URL ||
													'http://localhost:1337' +
														localPosts[2].featuredImage.url
												}
												alt={localPosts[2].featuredImage.alternativeText || ''}
												width={localPosts[2].featuredImage.width}
												height={localPosts[2].featuredImage.height}
												className="object-cover"
												style={{ height: '100%' }}
											/>
										</div>
										<div className="w-1/2 p-2 md:p-3 flex flex-col gap-1 bg-black/65">
											<h3 className="text-sm md:text-lg font-bold leading-tight text-white">
												{localPosts[2].title}
											</h3>
											<p className="text-xs text-gray-300 line-clamp-2 md:line-clamp-3">
												{localPosts[2].summary}
											</p>
										</div>
									</div>
								</Link>
							</CardContent>
						</Card>
					)}
				</div>
			)}
		</div>
	) : (
		<div>
			<p>No posts found.</p>
		</div>
	)
}

export default BlogCardGrid
