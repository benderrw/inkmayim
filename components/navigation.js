import { useState } from 'react'

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className="relative">
			{/* HAMBURGUER BUTTON */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={`md:hidden relative p-4 space-y-2 focus:outline-none ${
					isOpen ? 'z-50' : ''
				}`}
				aria-label="Toggle menu"
			>
				<span
					className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${
						isOpen ? 'rotate-45 translate-y-2.5' : ''
					}`}
				/>
				<span
					className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ${
						isOpen ? 'opacity-0' : ''
					}`}
				/>
				<span
					className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${
						isOpen ? '-rotate-45 -translate-y-2.5' : ''
					}`}
				/>
			</button>

			{/* OVERLAY */}
			<div className=""></div>
			<div
				className={`md:hidden fixed h-screen inset-0 bg-black/50 transition-opacity duration-300 ${
					isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
				}`}
				onClick={() => setIsOpen(false)}
			/>

			{/* MENU ITEMS */}
			<menu
				className={`fixed right-0 top-28 h-screen w-64 backdrop-blur-sm transition-transform duration-300 transform z-50 ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				} md:static md:translate-x-0 md:h-auto md:w-auto md:backdrop-blur-none`}
			>
				<ul className="font-[family-name:var(--font-antonio-sans)] py-4 md:flex">
					<li>
						<a
							href="#sobre"
							className="block px-4 py-4 text-xl uppercase bg-transparent text-white border border-transparent transition-all duration-300 border-b-white border-t-white md:border-0 hover:bg-white hover:text-black md:hover:text-black"
							title=""
						>
							Sobre
						</a>
					</li>
					<li>
						<a
							href="#galeria"
							className="block px-4 py-4 text-xl uppercase bg-transparent text-white border border-transparent transition-all duration-300 border-b-white md:border-0 hover:bg-white hover:text-black md:hover:text-black"
							title=""
						>
							Galeria
						</a>
					</li>
					<li>
						<a
							href="#duvidas"
							className="block px-4 py-4 text-xl uppercase bg-transparent text-white border border-transparent transition-all duration-300 border-b-white md:border-0 hover:bg-white hover:text-black md:hover:text-black"
							title=""
						>
							Dúvidas
						</a>
					</li>
					<li>
						<a
							href="#blog"
							className="block px-4 py-4 text-xl uppercase bg-transparent text-white border border-transparent transition-all duration-300 border-b-white md:border-0 hover:bg-white hover:text-black md:hover:text-black"
							title=""
						>
							Blog
						</a>
					</li>
					{/* <li>
						<a
							href="#eventos"
							className="block px-4 py-4 text-xl uppercase bg-transparent text-white border border-transparent transition-all duration-300 border-b-white md:border-0 hover:bg-white hover:text-black md:hover:text-black"
							title=""
						>
							Eventos
						</a>
					</li> */}
					<li>
						<a
							href="#contato"
							className="block px-4 py-4 text-xl uppercase bg-transparent text-white border border-transparent transition-all duration-300 border-b-white md:border-0 hover:bg-white hover:text-black md:hover:text-black"
							title=""
						>
							Contato
						</a>
					</li>
				</ul>
			</menu>
		</nav>
	)
}
export default Navigation
