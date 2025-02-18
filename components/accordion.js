import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

const AccordionItem = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className="border-b border-white">
			<button
				className="flex w-full justify-between items-center py-4 px-6 transition-colors"
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className="text-white text-md font-bold font-[family-name:var(--font-antonio-sans)] uppercase">
					{title}
				</span>
				<FiChevronDown
					className={`w-5 h-5 text-white transition-transform duration-300 ${
						isOpen ? 'rotate-180' : ''
					}`}
				/>
			</button>
			<div
				className={`overflow-hidden transition-all duration-300 ${
					isOpen ? 'max-h-96' : 'max-h-0'
				}`}
			>
				<div className="p-6 text-white text-sm">{children}</div>
			</div>
		</div>
	)
}

const Accordion = ({ items = [] }) => {
	if (!items || !Array.isArray(items) || items.length === 0) {
		return (
			<div className="text-gray-500 p-4 text-center">
				Nenhum item para exibir
			</div>
		)
	}

	return (
		<div className="border border-gray-200">
			{items.map((item, index) => (
				<AccordionItem key={index} title={item.title}>
					{item.content}
				</AccordionItem>
			))}
		</div>
	)
}

export default Accordion
