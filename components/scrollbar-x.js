import { useRef, useState, useEffect } from 'react'

export function ScrollbarX({ className, children, ...props }) {
	const containerRef = useRef(null)

	useEffect(() => {
		containerRef.current.addEventListener('wheel', function (event) {
			event.preventDefault() // Evita o scroll padrão
			containerRef.current.scrollLeft += event.deltaY // Move horizontalmente
		})
	}, [])

	return (
		<div
			ref={containerRef}
			className={`cursor-grab active:cursor-grabbing flex flex-row overflow-x-auto ${className}`}
			{...props}
		>
			{children}
		</div>
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
