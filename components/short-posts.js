import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ShortPosts({ items }) {
	return (
		<div className="w-full flex gap-4">
			<div className="w-1/2 h-[300px]">
				<motion.div whileHover={{ scale: 1.01 }} className="h-full">
					<Link href={items[0].slug} className="relative">
						<Image
							src={items[0].thumbnail.src}
							alt={items[0].thumbnail.alt}
							width={4000}
							height={2258}
							className="object-cover h-full"
						/>
						<div className="w-full flex flex-col gap-2 absolute bottom-0 p-4 bg-black/65">
							<h3 className="text-xl font-bold">{items[0].title}</h3>
							<p className="text-sm text-gray-300">{items[0].description}</p>
						</div>
					</Link>
				</motion.div>
			</div>

			<div className="w-1/2 h-[300px] flex flex-col gap-4">
				<motion.div whileHover={{ scale: 1.01 }} className="h-[calc(50%-8px)]">
					<Link
						href={items[1].slug}
						className="block h-full relative overflow-hidden"
					>
						<Image
							src={items[1].thumbnail.src}
							alt={items[1].thumbnail.alt}
							width={4000}
							height={2258}
							className="object-cover w-1/2 h-full"
						/>
						<div className="flex flex-col gap-2 absolute w-1/2 top-0 bottom-0 right-0 p-2 bg-black/65">
							<h3 className="text-lg leading-tight font-bold">
								{items[1].title}
							</h3>
							<p className="text-xs text-gray-300">{items[1].description}</p>
						</div>
					</Link>
				</motion.div>
				<motion.div whileHover={{ scale: 1.01 }} className="h-[calc(50%-8px)]">
					<Link
						href={items[2].slug}
						className="block h-full relative overflow-hidden"
					>
						<Image
							src={items[2].thumbnail.src}
							alt={items[2].thumbnail.alt}
							width={4000}
							height={2258}
							className="object-cover w-1/2 h-full"
						/>
						<div className="flex flex-col gap-2 absolute w-1/2 top-0 bottom-0 right-0 p-2 bg-black/65">
							<h3 className="text-lg leading-tight font-bold">
								{items[2].title}
							</h3>
							<p className="text-xs text-gray-300">{items[2].description}</p>
						</div>
					</Link>
				</motion.div>
			</div>
		</div>
	)
}
