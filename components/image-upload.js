import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, X } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Label } from '@/components/ui/label'

const ImageUpload = ({ onImagesChange }) => {
	const [images, setImages] = useState([])
	const [error, setError] = useState('')

	const onDrop = useCallback(
		(acceptedFiles) => {
			if (acceptedFiles.length + images.length > 4) {
				setError('Máximo de 4 imagens permitido')
				return
			}

			const validFiles = acceptedFiles.filter((file) => {
				const isValid = file.type.startsWith('image/')
				const isUnderSize = file.size <= 5 * 1024 * 1024 // 5MB
				return isValid && isUnderSize
			})

			if (validFiles.length !== acceptedFiles.length) {
				setError(
					'Algumas imagens foram rejeitadas. Use apenas imagens até 5MB.'
				)
			}

			const newImages = validFiles.map((file) => ({
				file,
				preview: URL.createObjectURL(file)
			}))

			setImages((prev) => {
				const updatedImages = [...prev, ...newImages]
				onImagesChange(updatedImages.map((img) => img.file))
				return updatedImages
			})
			setError('')
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
						<p className="text-sm text-white">
							Clique ou arraste até 4 imagens de referência
						</p>
					</div>
				</div>

				{error && (
					<Alert variant="destructive" className="mt-4">
						<AlertDescription>{error}</AlertDescription>
					</Alert>
				)}

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
