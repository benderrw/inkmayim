import Image from 'next/image'
import { useState } from 'react'

const GalleryFilterButton = ({ index, button, filter, setFilter }) => {
	return (
		<button
			key={index}
			data-filter={button.value}
			onClick={() => setFilter(filter === button.value ? 'all' : button.value)}
			className={`shrink-0 relative transition-transform grayscale triangle ${
				index % 2 !== 0 ? 'inverted' : ''
			} ${filter === button.value ? 'scale-105 grayscale-0 z-10' : ''}`}
		>
			<Image
				src={button.src}
				alt={button.label}
				width={200}
				height={200}
				className="object-cover w-full h-full"
			/>
			<div className="absolute top-0 left-0 w-full h-full flex flex-col align-center justify-center select-none">
				<div className="font-[family-name:var(--font-antonio-sans)] text-shadow-sm">
					{button.label}
				</div>
			</div>
		</button>
	)
}

const GalleryItem = ({ item, filter }) => {
	console.log(item)

	return (
		<div
			className={`${
				[...filter.matchAll(`${item.filter}|all`, 'g')].length
					? 'flex justify-center'
					: 'hidden'
			} text-white text-xs flex-1 basis-auto`}
			data-filter={item.filter}
		>
			<Image
				src={item.src}
				alt={item.alt}
				className="object-cover"
				width={175}
				height={200}
			/>
		</div>
	)
}

const Gallery = ({ filters, items }) => {
	const [filter, setFilter] = useState('simbolos')

	return (
		<>
			<div className="flex flex-wrap justify-center items-center">
				{filters.map((button, index) => (
					<GalleryFilterButton
						key={index}
						index={index}
						button={button}
						filter={filter}
						setFilter={setFilter}
					/>
				))}
			</div>

			<div className="flex flex-row flex-wrap gap-5 mt-10">
				{items.map((item, index) => (
					<GalleryItem key={index} item={item} filter={filter} />
				))}
			</div>
		</>
	)
}

export default Gallery
