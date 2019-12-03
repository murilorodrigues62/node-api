const express = require('express');
const routes = express.Router();

const ProductController = require("./controller/ProductController");

// Arquivo para configurar as rotas da api

/**
 * @api {get} /products Lista de Produtos
 * @apiName Products
 * @apiGroup Node-API
 * 
 * @apiSuccessExample {json} 200 OK
 *    
 * {
 *   "docs": [
 *       {
 *           "_id": "5de57768b1e53e1970f23ba1",
 *           "title": "Live On Test",
 *           "description": "JS Framework",
 *           "url": "http://123.com",
 *           "createdAt": "2019-12-02T20:43:20.672Z",
 *           "__v": 0
 *       },
 *       {
 *           "_id": "5de6bb4b5f0f750794da09bf",
 *           "title": "Live On Test 2",
 *           "description": "JS Framework",
 *           "url": "http://123.com",
 *           "createdAt": "2019-12-03T19:45:15.477Z",
 *           "__v": 0
 *       }       
 *   ],
 *   "total": 2,
 *   "limit": 10
 * }
 *
 */
routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.select);
routes.post("/products", ProductController.insert);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.delete);

module.exports = routes;