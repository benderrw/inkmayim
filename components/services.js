import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'

export default function Services() {
	const containerRef = useRef(null)
	const [width, setWidth] = useState(0)

	useEffect(() => {
		function updateWidth() {
			if (containerRef.current) {
				const rect = containerRef.current.getBoundingClientRect()
				const viewportWidth = window.innerWidth
				const newWidth = viewportWidth - rect.x // Define a largura baseada no eixo X
				setWidth(newWidth)
			}
		}

		updateWidth() // Atualiza ao montar o componente

		window.addEventListener('resize', updateWidth)

		containerRef.current.addEventListener('wheel', function (event) {
			event.preventDefault() // Evita o scroll padrão
			containerRef.current.scrollLeft += event.deltaY // Move horizontalmente
		})

		return () => window.removeEventListener('resize', updateWidth)
	}, [])

	return (
		<div
			className="absolute bottom-0 left-0 min-w-full flex flex-row gap-3 overflow-x-auto scrollbar-x"
			ref={containerRef}
			style={{ width: width }}
		>
			<Link
				href="/tattoo"
				className="block relative min-w-28 shrink-0 rounded-xl box-shadow-lg"
				style={{
					width: '150px',
					height: '250px',
					backgroundImage: 'url(/images/DSC_0913.jpg)',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center'
				}}
			>
				<h2 className="absolute bottom-3 left-2 text-xs">Tattoo</h2>
			</Link>
			<Link
				href="/piercing"
				className="block relative min-w-28 shrink-0 rounded-xl box-shadow-lg"
				style={{
					width: '150px',
					height: '250px',
					backgroundImage: 'url(/images/DSC_0515.jpg)',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center'
				}}
			>
				<h2 className="absolute bottom-3 left-2 text-xs">Piercing</h2>
			</Link>
			<Link
				href="/photography"
				className="block relative min-w-28 shrink-0 rounded-xl box-shadow-lg"
				style={{
					width: '150px',
					height: '250px',
					backgroundImage: 'url(/images/DSC_0087.jpg)',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat'
				}}
			>
				<h2 className="absolute bottom-3 left-2 text-xs">Fotografias</h2>
			</Link>
			<Link
				href="/promotions"
				className="block relative min-w-28 shrink-0 rounded-xl box-shadow-lg"
				style={{
					width: '150px',
					height: '250px',
					backgroundImage: 'url(/images/300x500.jpg)',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat'
				}}
			>
				<h2 className="absolute bottom-3 left-2 text-xs">Promoções</h2>
			</Link>
		</div>
	)
}
