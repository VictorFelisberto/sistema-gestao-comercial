const { Router } = require('express')

const routes = Router()

routes.get('/health', (req, res) => {
  return res.status(200).json({
    status: 'ok',
    message: 'Servidor funcionando pelas rotas',
  })
})

module.exports = routes