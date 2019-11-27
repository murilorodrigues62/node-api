const express = require('express');
const routes = express.Router();

const ProductController = require("./controller/ProductController");

// Arquivo para configurar as rotas da api

routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.select);
routes.post("/products", ProductController.insert);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.delete);

module.exports = routes;