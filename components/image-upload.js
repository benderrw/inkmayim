import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { toast } from 'sonner'
import { Upload, X } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Label } from '@/components/ui/label'

const ImageUpload = ({ onImagesChange }) => {
	const [images, setImages] = useState([])

	const onDrop = useCallback(
		(files) => {
			// Verifica se o número total de imagens não excede 4
			if (files.length + images.length > 4) {
				toast.error('Máximo de 4 imagens permitido')
				return
			}

			// Filtra os arquivos para garantir que sejam imagens e não excedem o tamanho máximo
			const validFiles = files.filter((file) => {
				const isTypeImage = file.type.startsWith('image/')
				const isUnderSize = file.size <= 5 * 1024 * 1024 // 5MB
				console.log(
					`FILE:\nisUnderSize: ${isUnderSize}\nisTypeImage: ${isTypeImage}`
				)
				return isTypeImage && isUnderSize
			})

			// Se algum arquivo não for uma imagem ou exceder o tamanho máximo, exibe um alerta
			if (validFiles.length !== files.length) {
				toast.error(
					files.length === 1
						? 'O arquivo deve ser uma imagem até 5MB'
						: 'Algumas imagens foram rejeitadas. Use apenas imagens até 5MB.'
				)
			}

			// Gera uma URL temporária para visualizar o arquivo no navegador sem precisar enviá-lo para um servidor
			const newImages = validFiles.map((file) => ({
				file,
				preview: URL.createObjectURL(file)
			}))

			setImages((prev) => {
				const updatedImages = [...prev, ...newImages]
				console.log('updatedImages', updatedImages)
				console.log(
					'updatedImages.map((img) => img.file)',
					updatedImages.map((img) => img.file)
				)
				onImagesChange(updatedImages.map((img) => img.file))
				console.log('return updatedImages', updatedImages)
				return updatedImages
			})
		},
		[images, onImagesChange]
	)

	const removeImage = (index) => {
		setImages((prev) => {
			const newImages = [...prev]
			URL.revokeObjectURL(newImages[index].preview)
			newImages.splice(index, 1)
			onImagesChange(newImages.map((img) => img.file))
			return newImages
		})
	}

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp'] },
		maxFiles: 4,
		multiple: true
	})

	return (
		<div className="w-full flex flex-col gap-2">
			<Label className="text-lg text-white font-[family-name:var(--font-antonio-sans)]">
				Referências visuais
			</Label>
			<div className="border border-white p-4">
				<div
					{...getRootProps()}
					className="flex flex-col items-center justify-center w-full h-32 border border-white border-dashed rounded-none cursor-pointer bg-transparent hover:bg-white/5 transition-colors"
				>
					<input {...getInputProps()} />
					<div className="flex flex-col items-center justify-center pt-5 pb-6">
						<Upload className="w-8 h-8 mb-2 text-white" />
						<p className="text-sm text-white text-center">
							Clique ou arraste e solte imagens aqui
							<span className="block text-xs font-extralight mt-1">
								(até 4 imagens, até 5MB cada)
							</span>
						</p>
					</div>
				</div>

				{images.length > 0 && (
					<div className="grid grid-cols-2 gap-4 mt-4">
						{images.map((image, index) => (
							<div key={index} className="relative">
								<img
									src={image.preview}
									alt={`Referência ${index + 1}`}
									className="w-full h-48 object-cover"
								/>
								<button
									onClick={() => removeImage(index)}
									className="absolute top-2 right-2 p-1 bg-red-500 text-white hover:bg-red-600 transition-colors"
									type="button"
								>
									<X className="w-4 h-4" />
								</button>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default ImageUpload
