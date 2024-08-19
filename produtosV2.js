// Classe Produto
class Produto {
    constructor(nome, descricao, quantidade, precoCompra, precoVenda) {
        this.nome = nome;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.precoCompra = precoCompra;
        this.precoVenda = precoVenda;
    }
}

// Armazenando os dados de estoque
let estoque = [];

// Funções de operações
function entradaProduto(produto) {
    estoque.push(produto);
    console.log("Produto adicionado ao estoque!");
    atualizarEstoque();
}

function removerProduto(nomeProduto) {
    estoque = estoque.filter(produto => produto.nome !== nomeProduto);
    console.log(`Produto ${nomeProduto} removido do estoque.`);
    atualizarEstoque();
}

function consultarQuantidade(nomeProduto) {
    const produto = estoque.find(produto => produto.nome === nomeProduto);
    if (produto) {
        console.log(`Quantidade de ${nomeProduto}: ${produto.quantidade}`);
    } else {
        console.log("Produto não encontrado no estoque.");
    }
}

function atualizarQuantidade(nomeProduto, novaQuantidade) {
    const produto = estoque.find(produto => produto.nome === nomeProduto);
    if (produto) {
        produto.quantidade = novaQuantidade;
        console.log(`Quantidade de ${nomeProduto} atualizada para ${novaQuantidade}.`);
        atualizarEstoque();
    } else {
        console.log("Produto não encontrado no estoque");
    }
}

// Função para adicionar produtos a partir da interface
function adicionarProduto() {
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const precoCompra = parseFloat(document.getElementById('precoCompra').value);
    const precoVenda = parseFloat(document.getElementById('precoVenda').value);

    const novoProduto = new Produto(nome, descricao, quantidade, precoCompra, precoVenda);
    entradaProduto(novoProduto);
}

// Função para atualizar a lista de estoque na interface
function atualizarEstoque() {
    const estoqueLista = document.getElementById('estoque');
    estoqueLista.innerHTML = '';

    estoque.forEach(produto => {
        const item = document.createElement('li');
        item.textContent = `${produto.nome} - ${produto.descricao}: ${produto.quantidade} unidades - R$ ${produto.precoVenda.toFixed(2)} cada`;
        estoqueLista.appendChild(item);
    });
}

// Criando produtos iniciais
const produtosIniciais = [
    new Produto("Pão de queijo", "Tradicional", 6, 14.00, 28.00),
    new Produto("Pão de queijo recheado Req", "Requeijão", 3, 28.00, 40.00),
    new Produto("Pão de queijo recheado Goi", "Goiabinha", 2, 28.00, 40.00),
    new Produto("Pão de queijo recheado Av", "Creme de avelã", 2, 28.00, 40.00),
    new Produto("Bolinha de queijo", "Tradicional", 1, 24.00, 38.00),
    new Produto("Coxinha", "Tradicional", 1, 24.00, 38.00),
    new Produto("Chipa", "Tradicional", 1, 19.00, 35.00),
    new Produto("Kibe", "Tradicional", 1, 24.00, 38.00),
    new Produto("Palito Parmesão", "Tradicional", 1, 19.00, 35.00),
    new Produto("Risole", "Presunto e Queijo", 1, 24.00, 38.00)
];

// Adicionando os produtos iniciais ao estoque
produtosIniciais.forEach(produto => entradaProduto(produto));
