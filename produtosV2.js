// Lista de produtos no estoque
let estoque = {};

// Função para adicionar ou atualizar um produto
function adicionarProduto() {
    const produto = document.getElementById('produto').value;
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const valor = parseFloat(document.getElementById('valor').value);

    if (!produto || isNaN(quantidade) || isNaN(valor)) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    // Se o produto já existe, atualiza a quantidade e o valor
    if (estoque[produto]) {
        estoque[produto].quantidade += quantidade;
        estoque[produto].valor = valor;
    } else {
        // Se não existe, cria um novo item no estoque
        estoque[produto] = {
            quantidade: quantidade,
            valor: valor
        };
    }

    atualizarEstoque();
}

// Função para atualizar a lista de estoque na interface
function atualizarEstoque() {
    const estoqueLista = document.getElementById('estoque');
    estoqueLista.innerHTML = '';

    for (let produto in estoque) {
        const item = document.createElement('li');
        item.textContent = `${produto}: ${estoque[produto].quantidade} unidades - R$ ${estoque[produto].valor.toFixed(2)} cada`;
        estoqueLista.appendChild(item);
    }
}
