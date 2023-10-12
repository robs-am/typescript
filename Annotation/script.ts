let produto: string = "Livro";
let preco: number = 200;

const carro: {
  marca: string;
  preco: number;
} = {
  marca: "Audi",
  preco: 200,
};

const barato: boolean | string = 200 < 400 ? true : "produto caro";

function somar(a: number, b: number) {
  return a + b;
}

somar(4, 10);

const nintendo = {
  nome: "Nintendo",
  preco: "2000",
};

function transformarPreco(produto: { nome: string; preco: string }) {
  produto.preco = "R$ " + produto.preco;
  return produto;
}

const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
