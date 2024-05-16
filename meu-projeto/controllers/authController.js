const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models/user');

const generateToken = (params = {}) => {
  return jwt.sign(params, process.env.JWT_SECRET, {
    expiresIn: '24h' // Alterado para string '24h' para melhor legibilidade
  });
};

exports.login = async (req, res) => {
  // Implemente a lógica de login
};

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Verifica se o usuário já existe no banco de dados
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Este email já está sendo usado.' });
    }

    // Hash da senha antes de armazenar no banco de dados
    const hashedPassword = await bcrypt.hash(password, 10);

    // Cria um novo usuário no banco de dados

    const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models/user');

const generateToken = (params = {}) => {
  return jwt.sign(params, process.env.JWT_SECRET, {
    expiresIn: '24h' // Alterado para string '24h' para melhor legibilidade
  });
};

exports.login = async (req, res) => {
  // Implemente a lógica de login
};

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Verifica se o usuário já existe no banco de dados
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Este email já está sendo usado.' });
    }

    // Hash da senha antes de armazenar no banco de dados
    const hashedPassword = await bcrypt.hash(password, 10);

    // Cria um novo usuário no banco de dados
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword
    });

    // Gera um token de autenticação para o novo usuário
    const token = generateToken({ userId: newUser.id });

    // Retorna uma resposta de sucesso com o novo usuário criado e o token de autenticação
    res.status(201).json({ user: newUser, token });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ error: 'Erro ao registrar usuário. Por favor, tente novamente mais tarde.' });
  }
};