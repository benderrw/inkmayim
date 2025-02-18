import { useRef, useState, useEffect } from 'react'
import { Scrollbar } from 'react-scrollbars-custom'

export function ScrollbarX({ className, children, ...props }) {
	const scrollbarRef = useRef(null)

	const handleWheel = (event) => {
		if (scrollbarRef.current) {
			scrollbarRef.current.scrollLeft += event.deltaY
			event.preventDefault()
		}
	}

	return (
		<Scrollbar
			{...props}
			ref={scrollbarRef}
			noScrollY
			onWheel={handleWheel}
			thumbXProps={{
				style: {
					backgroundColor: '#666', // Cor do scroll horizontal
					borderRadius: '10px',
					height: '2px'
				}
			}}
			trackXProps={{
				style: {
					backgroundColor: '#333', // Cor da trilha do scroll horizontal
					borderRadius: '10px',
					height: '2px'
				}
			}}
			className=""
		>
			<div className={`flex flex-row flex-nowrap items-end ${className}`}>
				{children}
			</div>
		</Scrollbar>
	)
}

export function ScrollbarXViewport({ className, children, ...props }) {
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
			ref={containerRef}
			className={`absolute bottom-0 left-0 right-0 min-w-full cursor-grab active:cursor-grabbing flex flex-row overflow-x-auto scrollbar-x ${className}`}
			style={{ width }}
			{...props}
		>
			{children}
		</div>
	)
}
