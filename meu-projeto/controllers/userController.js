const { User } = require('../models/user');

// Função para obter todos os usuários
exports.getAllUsers = async (req, res) => {
  console.log("entrou nos usuarios")
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error('Erro ao buscar todos os usuários:', error);
    res.status(500).json({ error: 'Erro ao buscar todos os usuários. Por favor, tente novamente mais tarde.' });
  }
};

// Função para obter um usuário por ID
exports.getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(`Erro ao buscar o usuário com ID ${userId}:`, error);
    res.status(500).json({ error: 'Erro ao buscar o usuário. Por favor, tente novamente mais tarde.' });
  }
};

// Função para atualizar informações do usuário atual
exports.updateCurrentUser = async (req, res) => {
  const userId = req.user.id; // Obtém o ID do usuário autenticado
  const updates = req.body; // Dados para atualização

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    // Atualiza os dados do usuário
    await user.update(updates);

    res.status(200).json({ message: 'Dados do usuário atualizados com sucesso.', user });
  } catch (error) {
    console.error('Erro ao atualizar informações do usuário atual:', error);
    res.status(500).json({ error: 'Erro ao atualizar informações do usuário. Por favor, tente novamente mais tarde.' });
  }
};
