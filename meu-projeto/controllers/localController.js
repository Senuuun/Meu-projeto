// const { Local } = require('../models/user');

let locais = [
    { id: 1, name: 'Local 1', description: 'Descrição do Local 1' },
    { id: 2, name: 'Local 2', description: 'Descrição do Local 2' },
    { id: 3, name: 'Local 3', description: 'Descrição do Local 3' }
  ];
  
  // Método para obter todos os locais
  const getAllLocais = (req, res) => {
    console.log("entrou")
    try {
      res.status(200).json(locais); // Retorna todos os locais como resposta
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar locais', error: error.message });
    }
  };
  
  // Método para obter um local específico por ID
  const getLocalById = (req, res) => {
    const { id } = req.params;
    const local = locais.find((l) => l.id === parseInt(id));
    if (!local) {
      return res.status(404).json({ message: 'Local não encontrado' });
    }
    res.status(200).json(local);
  };
  
  // Método para criar um novo local
  const createLocal = (req, res) => {
    const { name, description } = req.body;
    const newLocal = { id: locais.length + 1, name, description };
    locais.push(newLocal);
    res.status(201).json(newLocal);
  };
  
  // Método para atualizar um local existente por ID
  const updateLocal = (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const index = locais.findIndex((l) => l.id === parseInt(id));
    if (index === -1) {
      return res.status(404).json({ message: 'Local não encontrado' });
    }
    locais[index].name = name;
    locais[index].description = description;
    res.status(200).json(locais[index]);
  };
  
  // Método para deletar um local existente por ID
  const deleteLocal = (req, res) => {
    const { id } = req.params;
    const index = locais.findIndex((l) => l.id === parseInt(id));
    if (index === -1) {
      return res.status(404).json({ message: 'Local não encontrado' });
    }
    const deletedLocal = locais.splice(index, 1);
    res.status(200).json(deletedLocal);
  };
  
  module.exports = {
    getAllLocais,
    getLocalById,
    createLocal,
    updateLocal,
    deleteLocal
  };