console.log
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

// Carregar variáveis de ambiente
dotenv.config();

// Inicializar o aplicativo Express
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rotas
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const localRoutes = require('./routes/locais');

// Adicionar as rotas ao aplicativo
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/locais', localRoutes);

// Configuração do Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentação',
      version: '1.0.0',
      description: 'Documentação da API',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3000}`,
      },
    ],
  },
  apis: ['./routes/*.js'],
};
const specs = swaggerJsdoc(swaggerOptions);

// Documentação da API
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});