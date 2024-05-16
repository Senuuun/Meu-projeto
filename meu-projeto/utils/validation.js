const { User } = require('../models');

exports.validateEmail = async (email) => {
  try {
    const existingUser = await User.findOne({ where: { email } });
    return !existingUser;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao verificar o e-mail');
  }
};

exports.validateCPF = async (cpf) => {
  // Lógica de validação do CPF
};

exports.validatePassword = (password) => {
  // Lógica de validação da senha
};

exports.validateBirthDate = (birthDate) => {
  // Lógica de validação da data de nascimento
};