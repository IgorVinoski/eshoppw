const { request, response } = require('express');
const {
    getProdutosDB,
    addProdutoDB,
    updateProdutoDB,
    deleteProdutoDB,
    getProdutoPorCodigoDB
} = require('../use-cases/produtoUseCase');

const getProdutos = async (request, response) => {
    try {
        const produtos = await getProdutosDB();
        response.status(200).json(produtos);
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: 'Erro ao consultar os produtos: ' + err
        });
    }
};

const addProduto = async (request, response) => {
    try {
        const produto = await addProdutoDB(request.body);
        response.status(200).json({
            status: "success", 
            message: "Produto criado",
            objeto: produto
        });
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: err
        });
    }
};

const updateProduto = async (request, response) => {
    try {
        const produto = await updateProdutoDB(request.body);
        response.status(200).json({
            status: "success", 
            message: "Produto alterado",
            objeto: produto
        });
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: err
        });
    }
};

const deleteProduto = async (request, response) => {
    try {
        const resultado = await deleteProdutoDB(parseInt(request.params.codigo));
        response.status(200).json({
            status: "success", 
            message: resultado
        });
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: err
        });
    }
};

const getProdutoPorCodigo = async (request, response) => {
    try {
        const produto = await getProdutoPorCodigoDB(parseInt(request.params.codigo));
        response.status(200).json(produto);
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: err
        });
    }
};

module.exports = {
    getProdutos,
    addProduto,
    updateProduto,
    deleteProduto,
    getProdutoPorCodigo
};
