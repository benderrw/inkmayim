import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
	if (req.method === 'GET') {
		try {
			const contatos = await prisma.contatos.findMany({
				include: { mensagens: true }
			})
			return res.status(200).json(contatos)
		} catch (error) {
			return res.status(500).json({ error: 'Erro ao buscar contatos' })
		}
	}

	if (req.method === 'POST') {
		try {
			const { nome, email, telefone, mensagem, imagens } = req.body

			// Verifica se o contato já existe pelo email
			const contatoExistente = await prisma.contatos.findUnique({
				where: {
					email: email
				}
			})

			if (contatoExistente) {
				// Se o contato existe, apenas cria uma nova mensagem
				const novaMensagem = await prisma.mensagens.create({
					data: {
						mensagem: mensagem,
						contatoId: contatoExistente.id,
						imagens
					}
				})

				return res.status(200).json({
					message: 'Mensagem adicionada ao contato existente',
					contato: contatoExistente
				})
			} else {
				// Se o contato não existe, cria o contato e a mensagem
				const novoContato = await prisma.contatos.create({
					data: {
						nome,
						email,
						telefone,
						mensagens: {
							create: [
								{
									mensagem,
									imagens: null // ou um array de URLs se você tiver imagens
								}
							]
						}
					},
					include: {
						mensagens: true
					}
				})

				return res.status(201).json({
					message: 'Formulário enviado com sucesso!',
					contato: novoContato
				})
			}
		} catch (error) {
			console.error('Erro detalhado:', error)
			return res.status(500).json({
				error: 'Erro ao processar requisição',
				details: error.message
			})
		}
	}

	return res.status(405).json({ message: 'Método não permitido' })
}
