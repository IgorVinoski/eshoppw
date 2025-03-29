const { Router } = require("express");
const { rotasCategorias } = require("./rotasCategorias");
const {rotasProdutos} = require('../routes/rotasProduto')
const rotas = new Router();


rotas.use(rotasCategorias);
rotas.use(rotasProdutos)
module.exports = rotas;