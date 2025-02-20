import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { FileSearch } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const PostCards = ({ posts }) => {
	const [localPosts, setLocalPosts] = useState([])

	useEffect(() => {
		setLocalPosts(posts)
	}, [posts])

	return localPosts.length ? (
		<div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
			{/* Main featured card - full width on mobile, half width on desktop */}
			<Card>
				<CardContent className="p-0 h-full">
					<Link href={`/blog/${localPosts[0].id}`} className="block h-full">
						<div className="flex flex-row sm:flex-col">
							<Image
								src={
									process.env.PUBLIC_STRAPI_URL ||
									'http://localhost:1337' + localPosts[0].featuredImage.url
								}
								alt={localPosts[0].featuredImage.alternativeText || ''}
								width={localPosts[0].featuredImage.width}
								height={localPosts[0].featuredImage.height}
								className="w-1/2 sm:w-full object-cover rounded-t-lg h-48 sm:h-36"
								priority
							/>
							<div className="w-1/2 sm:w-full px-5 py-7 flex flex-col gap-1 sm:gap-2">
								<h3 className="text-sm sm:text-lg font-bold leading-tight text-white">
									{localPosts[0].title}
								</h3>
								<p className="text-xs sm:text-sm text-gray-300 line-clamp-2 sm:line-clamp-3">
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
							<Link href={`/blog/${localPosts[0].slug}`}>
								<div className="flex h-full">
									<div className="w-1/2 relative">
										<Image
											src={
												process.env.PUBLIC_STRAPI_URL ||
												'http://localhost:1337' +
													localPosts[0].featuredImage.url
											}
											alt={localPosts[0].featuredImage.alternativeText || ''}
											width={localPosts[0].featuredImage.width}
											height={localPosts[0].featuredImage.height}
											className="object-cover"
											style={{ height: '100%' }}
										/>
									</div>
									<div className="w-1/2 p-5 flex flex-col gap-1 bg-black/65">
										<h3 className="text-sm md:text-lg font-bold leading-tight text-white">
											{localPosts[0].title}
										</h3>
										<p className="text-xs text-gray-300 line-clamp-2 md:line-clamp-3">
											{localPosts[0].summary}
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
								<Link href={`/blog/${localPosts[0].slug}`}>
									<div className="flex h-full">
										<div className="w-1/2 relative">
											<Image
												src={
													process.env.PUBLIC_STRAPI_URL ||
													'http://localhost:1337' +
														localPosts[0].featuredImage.url
												}
												alt={localPosts[0].featuredImage.alternativeText || ''}
												width={localPosts[0].featuredImage.width}
												height={localPosts[0].featuredImage.height}
												className="object-cover"
												style={{ height: '100%' }}
											/>
										</div>
										<div className="w-1/2 p-5 flex flex-col gap-1 bg-black/65">
											<h3 className="text-sm md:text-lg font-bold leading-tight text-white">
												{localPosts[0].title}
											</h3>
											<p className="text-xs text-gray-300 line-clamp-2 md:line-clamp-3">
												{localPosts[0].summary}
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
		<Alert>
			<FileSearch className="h-4 w-4" />
			<AlertTitle>Opa!</AlertTitle>
			<AlertDescription>Nenhum post foi encontrado.</AlertDescription>
		</Alert>
	)
}

export default PostCards
