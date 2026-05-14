const { Router } = require('express')
const prisma = require('../lib/prisma')

const routes = Router()

routes.get('/health', (req, res) => {
  return res.status(200).json({
    status: 'ok',
    message: 'Servidor funcionando pelas rotas',
  })
})

routes.get('/db-test', async (req, res) => {
  try {
    await prisma.$connect()

    return res.status(200).json({
      status: 'ok',
      message: 'Conexão com o banco funcionando',
    })
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Erro ao conectar com o banco',
      details: error.message,
    })
  }
})

module.exports = routes