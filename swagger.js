// swagger.js
const swaggerJSDoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BEANBUZZ API",
      version: "1.0.0",
      description: "BEANBUZZ Express API with MongoDB and Mongoose",
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
  },
  apis: ["./src/routes/swaggerDocs.js"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;
