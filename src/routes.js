const express = require("express");
const routes = express.Router();

const produtosController = require("./controllers/produtosController");
routes.get("/produtos", produtosController.index);
routes.post("/produtos", produtosController.creat);

module.exports = routes;
