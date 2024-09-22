import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Ruang Cerpen API',
      version: '1.0.0',
    },
  },
  apis: ['./src/**/*.ts'], // Sesuaikan dengan path file Anda
};

const specs = swaggerJsdoc(options);

export default specs;// Contoh kode untuk lib: SwaggerLib
