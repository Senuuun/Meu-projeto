const { Router } = require('express') // 
const localRouter = new Router();
const localController = require('../controllers/localController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rota para buscar todos os locais
localRouter.get('/', localController.getAllLocais);

// Rota para buscar um local específico por ID
localRouter.get('/:id', localController.getLocalById);

// Rota para criar um novo local (requer autenticação)
localRouter.post('/', authMiddleware, localController.createLocal);

// Rota para atualizar um local existente por ID (requer autenticação)
localRouter.put('/:id', authMiddleware, localController.updateLocal);

// Rota para deletar um local existente por ID (requer autenticação)
localRouter.delete('/:id', authMiddleware, localController.deleteLocal);

module.exports = localRouter;