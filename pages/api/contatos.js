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
				await prisma.mensagens.create({
					data: {
						mensagem: mensagem,
						contatoId: contatoExistente.id,
						imagens
					}
				})

				// Verifica se o contato já existe pelo email
				const telefoneExistente = await prisma.telefones.findUnique({
					where: {
						telefone
					}
				})

				// Se o telefone não existe, cria o telefone
				if (!telefoneExistente) {
					await prisma.telefones.create({
						data: {
							telefone,
							contatoId: contatoExistente.id
						}
					})
				}

				return res.status(201).json({
					message: `Gratidão pelo contato ${contatoExistente.nome}! Entrei em contato com você em breve!`,
					contato: contatoExistente
				})
			} else {
				// Se o contato não existe, cria o contato e a mensagem
				const novoContato = await prisma.contatos.create({
					data: {
						nome,
						email,
						telefones: {
							create: [
								{
									telefone
								}
							]
						},
						mensagens: {
							create: [
								{
									mensagem,
									imagens // ou um array de URLs se você tiver imagens
								}
							]
						}
					}
				})

				return res.status(201).json({
					message: `Gratidão pelo contato ${novoContato.nome}! Entrei em contato com você em breve!`,
					contato: novoContato
				})
			}
		} catch (error) {
			return res.status(500).json({
				error: 'Erro ao processar requisição',
				details: error.message
			})
		}
	}

	return res.status(405).json({ message: 'Método não permitido' })
}
