var productList = [];

fetch('/produtos').then(function (response) {
  return response.json()
})
  .then(function (products) {
    productList.length = 0;
    products.forEach(function (product) {
      productList.push(product)
    });
    loadProductList()
  });

function onSearchChange(element) {
  var search = element.value.toLowerCase();
  var list = document.querySelector('.list');
  list.innerHTML = '';
  productList.forEach(function (product) {
    if (product.toLowerCase().startsWith(search)) {
      var item = document.createElement('li');
      item.innerText = product;
      list.appendChild(item)
    }
  })
}

function loadProductList() {
  var list = document.querySelector('.list');
  productList.forEach(function (product) {
    var item = document.createElement('li');
    item.innerText = product;
    list.appendChild(item)
  })
}

var listaProvider = [
  'João',
  'Lucas',
  'Thiago',
  'Matheus',
  'Paulo',
  'Judas',
  'Pedro',
  'Jesus'
];

function loadProviderName() {
  var lista = document.querySelector('.lista');
  listaProvider.forEach(function (n) {
    var item = document.createElement('li');
    item.innerText = n;
    lista.appendChild(item)
  })
}

function buscarProvider(e) {
  var search = e.value.toLowerCase();
  var lista = document.querySelector('.lista');
  lista.innerHTML = '';
  listaProvider.forEach(function (n) {
    if (n.toLowerCase().startsWith(search)) {
      var item = document.createElement('li');
      item.innerText = n;
      lista.appendChild(item)
    }
  })
}

var historic = [
  'Arroz',
  'Feijao',
  'Açucar',
  'Alface',
  'Amedoim',
  'Carne',
  'Bolacha',
  'Suco'
];

function history() {
  var lista = document.querySelector('.lista');
  historic.forEach(function (n) {
    var item = document.createElement('li');
    item.innerText = n;
    lista.appendChild(item)
  })
}

var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];


modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);


function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

function enviarDados() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var telefone = document.getElementById("telefone").value;
  var celular = document.getElementById("celular").value;
  var anotacoes = document.getElementById("anotacoes").value;

  if (nome.length < 3 || nome.length > 30)
    alert('Tamanho do nome invalido');
  else {
    if (email.length < 0 || email.length > 50)
      alert('Email invalido');
    else {
      if (telefone <= 0)
        alert('Telefone invalido');
      else {
        if (celular <= 0)
          alert('Celular invalido');
        else {
          if (anotacoes.length < 0)
            alert('Sem anotações');
          else
            alert('Cadastro realizado com sucesso\nNome: ' + nome + '\nEmail: ' + email + '\nTelefone: ' + telefone + '\nCelular: ' + celular + '\nAnotações: ' + anotacoes);
        }
      }
    }
  }
}

function enviarDados2() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var telefone = document.getElementById("telefone").value;
  var celular = document.getElementById("celular").value;
  var endereco = document.getElementById("endereco").value;
  var observacao = document.getElementById("observacao").value;

  if (nome.length < 3 || nome.length > 30)
    alert('Tamanho do nome invalido');
  else {
    if (email.length < 0 || email.length > 50)
      alert('Email invalido');
    else {
      if (telefone <= 0)
        alert('Telefone invalido');
      else {
        if (celular <= 0)
          alert('Celular invalido');
        else {
          if (endereco.length < 0)
            alert('Sem Endereco');
          else {
            if (observacao.length < 0)
              alert('Sem Observaçao');
            else
              alert('Cadastro realizado com sucesso\nNome: ' + nome + '\nEmail: ' + email + '\nTelefone: ' + telefone + '\nCelular: ' + celular + '\nEndereço: ' + endereco + '\nObservação: ' + observacao);

          }
        }
      }
    }
  }
}

function enviarDados3() {
  var codigoProduto = document.getElementById("codigoProduto").value;
  var nomeProduto = document.getElementById("nomeProduto").value;
  var precoCompra = document.getElementById("precoCompra").value;
  var precoVenda = document.getElementById("precoVenda").value;
  var quantidade = document.getElementById("quantidade").value;
  var fornecedor = document.getElementById("fornecedor").value;

  if (codigoProduto.length < 0 || codigoProduto.length > 30)
    alert('Codigo invalido');
  else {
    if (nomeProduto.length < 0 || nomeProduto.length > 50)
      alert('Nome do produto invalido');
    else {
      if (precoCompra <= 0)
        alert('Preço de compra invalido');
      else {
        if (precoVenda <= 0)
          alert('Preço de venda invalido');
        else {
          if (quantidade <= 0)
            alert('Quantidade desconhecida');
          else {
            if (fornecedor.length < 0)
              alert('Sem Fornecedor');
            else
              alert('Cadastro realizado com sucesso\nCodigo: ' + codigoProduto + '\nNome do Produto: ' + nomeProduto + '\nPreço de compra: ' + precoCompra + '\nPreço de Venda: ' + precoVenda + '\nQuantidade: ' + quantidade + '\nFornecedor: ' + fornecedor);

          }
        }
      }
    }
  }
}
