import formidable from 'formidable'
import path from 'path'
import fs from 'fs'

export const config = {
	api: {
		bodyParser: false
	}
}

const uploadDir = path.join(process.cwd(), 'public/uploads')

// Garante que o diretório de upload existe
if (!fs.existsSync(uploadDir)) {
	fs.mkdirSync(uploadDir, { recursive: true })
}

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Método não permitido' })
	}

	const form = formidable({
		uploadDir,
		keepExtensions: true,
		maxFiles: 4,
		maxFileSize: 5 * 1024 * 1024, // 5MB
		multiples: true,
		filename: (name, ext, part) => {
			return `${Date.now()}-${part.originalFilename.replace(/\s+/g, '-')}`
		}
	})

	try {
		const { files } = await new Promise((resolve, reject) => {
			form.parse(req, (err, fields, files) => {
				if (err) reject(err)
				resolve({ files })
			})
		})

		const fileUrls = []
		Object.values(files).forEach((fileArray) => {
			fileArray.forEach((file) => {
				fileUrls.push(`/uploads/${path.basename(file.filepath)}`)
			})
		})

		return res.status(200).json({ urls: fileUrls })
	} catch (error) {
		console.error('Erro no upload:', error)
		return res.status(500).json({ error: 'Erro ao processar upload' })
	}
}
