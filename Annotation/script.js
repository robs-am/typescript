"use strict";
let produto = "Livro";
let preco = 200;
const carro = {
    marca: "Audi",
    preco: 200,
};
const barato = 200 < 400 ? true : "produto caro";
function somar(a, b) {
    return a + b;
}
somar(4, 10);
const nintendo = {
    nome: "Nintendo",
    preco: "2000",
};
function transformarPreco(produto) {
    produto.preco = "R$ " + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
