import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
    },
  },
  apis: ['./pages/api/**/*.ts'], // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(options);

export default { swaggerUi, swaggerSpec };