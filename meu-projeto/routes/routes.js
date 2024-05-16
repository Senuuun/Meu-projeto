const { Router } = require('express');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const localRoutes = require('./routes/locais');

const routes = Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./doc.swagger.json');

routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
routes.use('/auth', authRoutes);
routes.use('/users', userRoutes);
routes.use('/locais', localRoutes);

module.exports = routes;