import { useRef, useState } from 'react'
import { toast } from 'sonner'
import ImageUpload from '@/components/image-upload'

const FormContact = () => {
	const [loading, setLoading] = useState(false)
	const [images, setImages] = useState([])
	const [data, setData] = useState({
		nome: '',
		telefone: '',
		email: '',
		mensagem:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	})
	const firstField = useRef()

	const onImagesChange = (newImages) => setImages(newImages)

	const handleSubmit = async (event) => {
		event.preventDefault()
		setLoading(true)

		try {
			const imageUrls = []

			if (images.length > 0) {
				// Cria um objeto FormData para enviar as imagens
				const formData = new FormData()

				// Adiciona cada imagem ao FormData
				images.forEach((image) => {
					formData.append('files', image)
				})

				// Faça o upload das imagens para o servidor
				const uploadResponse = await fetch('/api/upload', {
					method: 'POST',
					body: formData
				})

				// Verifica se o upload foi bem-sucedido
				if (!uploadResponse.ok) {
					throw new Error('Erro ao fazer upload das imagens')
				}

				// Obtém as URLs das imagens
				const { urls } = await uploadResponse.json()

				// Adiciona as URLs das imagens ao array
				imageUrls.push(...urls)
			}

			// Envio do formulário com as URLs das imagens
			const formData = {
				nome: data.nome,
				email: data.email,
				telefone: data.telefone,
				mensagem: data.mensagem,
				imagens: imageUrls
			}

			const response = await fetch('/api/contatos', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			})

			const responseData = await response.json()

			if (response.ok) {
				toast.success(responseData.message)
				setData({
					nome: '',
					telefone: '',
					email: '',
					mensagem: ''
				})
				setImages([])
			} else {
				toast.error('Erro ao enviar formulário.')
			}
		} catch (error) {
			toast.error(error.message)
		}

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
						name="nome"
						placeholder=""
						className="border border-white px-4 py-4 bg-transparent text-white"
						value={data.nome}
						onChange={(e) => setData({ ...data, nome: e.target.value })}
						required
						ref={firstField}
					/>
				</div>

				<div className="w-full md:w-[calc(50%-8px)] flex flex-col gap-2">
					<label
						htmlFor="telefone"
						className="text-lg text-white font-[family-name:var(--font-antonio-sans)]"
					>
						Telefone
					</label>
					<input
						type="text"
						id="telefone"
						name="telefone"
						placeholder=""
						className="border border-white px-4 py-4 bg-transparent text-white"
						value={data.telefone}
						onChange={(e) => setData({ ...data, telefone: e.target.value })}
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
						placeholder=""
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
						rows={5}
						id="message"
						name="mensagem"
						placeholder="Utilize este espaço para nos explicar a sua idéia e as suas expectativas. Isso nos ajudará a entender melhor o seu projeto e a fornecer uma proposta mais personalizada."
						className="border border-white px-4 py-4 bg-transparent text-white"
						value={data.mensagem}
						onChange={(e) => setData({ ...data, mensagem: e.target.value })}
						required
					></textarea>
				</div>

				<div className="w-full flex flex-col gap-2">
					<ImageUpload onImagesChange={onImagesChange} />
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
