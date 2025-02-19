import Image from 'next/image'
import { useState } from 'react'

const WorkspaceCollection = ({ index, data, filter, setFilter }) => {
	return (
		<button
			key={index}
			data-filter={data.slug}
			onClick={() => setFilter(filter === data.slug ? 'all' : data.slug)}
			className={`shrink-0 relative transition-transform grayscale triangle ${
				index % 2 !== 0 ? 'inverted' : ''
			} ${filter === data.slug ? 'scale-105 grayscale-0 z-10' : ''}`}
		>
			<Image
				src={
					(process.env.PUBLIC_STRAPI_URL || 'http://localhost:1337') +
					data.image.url
				}
				alt={data.image.alternativeText}
				width={data.image.width}
				height={data.image.height}
				className="object-cover w-full h-full"
				style={{ height: '100%' }}
			/>
			<div className="absolute top-0 left-0 w-full h-full flex flex-col align-center justify-center select-none">
				<div className="font-[family-name:var(--font-antonio-sans)] text-shadow-sm">
					{data.name}
				</div>
			</div>
		</button>
	)
}

const WorkspaceImage = ({ data, filter }) => {
	return (
		<div
			className={`${
				[...filter.matchAll(`${data.collection.slug}|all`, 'g')].length
					? 'flex justify-center'
					: 'hidden'
			} text-white text-xs w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 box-border p-2`}
			data-filter={data.collection.slug}
		>
			<Image
				src={
					(process.env.PUBLIC_STRAPI_URL || 'http://localhost:1337') +
					data.image.url
				}
				alt={data.image.alternativeText}
				className="object-cover"
				width={data.image.width}
				height={data.image.height}
				style={{ width: 'auto', height: '200px' }}
			/>
		</div>
	)
}

const Workspace = ({ collections, images }) => {
	const [filter, setFilter] = useState('all')

	return (
		<>
			<div className="flex flex-wrap justify-center items-center">
				{collections.map((data, index) => (
					<WorkspaceCollection
						key={index}
						index={index}
						data={data}
						filter={filter}
						setFilter={setFilter}
					/>
				))}
			</div>

			<div className="w-full mt-10 flex flex-wrap justify-center">
				{images.map((data, index) => (
					<WorkspaceImage key={index} data={data} filter={filter} />
				))}
			</div>
		</>
	)
}

export default Workspace
