const { Router } = require('express');
const userRouter = Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rota para obter informações do usuário atual
userRouter.get('/me', authMiddleware, userController.getCurrentUser);

// Rota para atualizar informações do usuário atual
userRouter.put('/me', authMiddleware, userController.updateCurrentUser);

// Rota para obter todos os usuários
userRouter.get('/', authMiddleware, userController.getAllUsers);

// Rota para obter um usuário específico por ID
userRouter.get('/:id', authMiddleware, userController.getUserById);

// Rota para criar um novo usuário
userRouter.post('/', authMiddleware, userController.createUser);

// Rota para atualizar um usuário específico por ID
userRouter.put('/:id', authMiddleware, userController.updateUserById);

// Rota para excluir o usuário atual
userRouter.delete('/me', authMiddleware, userController.deleteCurrentUser);

// Rota para excluir um usuário específico por ID
userRouter.delete('/:id', authMiddleware, userController.deleteUserById);

module.exports = userRouter;
