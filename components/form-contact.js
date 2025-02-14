import { useState } from 'react'

const FormContact = () => {
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState({})

	const handleSubmit = async (event) => {
		event.preventDefault()
		setLoading(true)
		await new Promise((resolve) => setTimeout(resolve, 5000))
		setLoading(false)
	}

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<div className="w-full flex flex-wrap gap-4">
				<div className="w-full md:w-[calc(50%-8px)] flex flex-col gap-2">
					<label
						htmlFor="name"
						className="text-lg text-white font-[family-name:var(--font-antonio-sans)]"
					>
						Nome
					</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Nome"
						className="border border-white px-4 py-4 bg-transparent text-white"
						value={data.name}
						onChange={(e) => setData({ ...data, name: e.target.value })}
						required
					/>
				</div>

				<div className="w-full md:w-[calc(50%-8px)] flex flex-col gap-2">
					<label
						htmlFor="tel"
						className="text-lg text-white font-[family-name:var(--font-antonio-sans)]"
					>
						Telefone
					</label>
					<input
						type="text"
						id="tel"
						name="tel"
						placeholder="Telefone"
						className="border border-white px-4 py-4 bg-transparent text-white"
						value={data.tel}
						onChange={(e) => setData({ ...data, tel: e.target.value })}
						required
					/>
				</div>

				<div className="w-full flex flex-col gap-2">
					<label
						htmlFor="email"
						className="text-lg text-white font-[family-name:var(--font-antonio-sans)]"
					>
						E-mail
					</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="E-mail"
						className="border border-white px-4 py-4 bg-transparent text-white"
						value={data.email}
						onChange={(e) => setData({ ...data, email: e.target.value })}
						required
					/>
				</div>

				<div className="w-full flex flex-col gap-2">
					<label
						htmlFor="message"
						className="text-md text-white font-[family-name:var(--font-antonio-sans)]"
					>
						Sua mensagem
					</label>
					<textarea
						rows={4}
						id="message"
						name="message"
						placeholder="Utilize este espaço para nos explicar a sua idéia e as suas expectativas. Isso nos ajudará a entender melhor o seu projeto e a fornecer uma proposta mais personalizada."
						className="border border-white px-4 py-4 bg-transparent text-white"
						value={data.message}
						onChange={(e) => setData({ ...data, message: e.target.value })}
						required
					></textarea>
				</div>

				<div className="w-full flex justify-end">
					<button
						type="submit"
						className="border border-white w-full md:w-1/2 lg:w-1/3 mt-5 text-white text-xl font-bold font-[family-name:var(--font-antonio-sans)] px-4 py-4 uppercase transition-all duration-300 hover:bg-white hover:text-black flex gap-4 justify-center items-center disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-transparent disabled:border-gray-500"
						disabled={loading}
					>
						{loading && (
							<svg
								className="animate-spin h-6 w-6 text-white"
								viewBox="0 0 24 24"
							>
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								></circle>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6H4z"
								></path>
							</svg>
						)}
						<span>Enviar</span>
					</button>
				</div>
			</div>
		</form>
	)
}

export default FormContact
