const express = require("express");
const routes = express.Router();

const produtosController = require("./controllers/produtosController");

routes.post("/produtos", produtosController.create);
routes.get("/produtos", produtosController.index);
module.exports = routes;
