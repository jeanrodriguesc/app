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

  alert('Cadastro realizado com sucesso\nNome: ' + nome + '\nEmail: ' + email + '\nTelefone: ' + telefone + '\nCelular: ' + celular + '\nAnotações: ' + anotacoes);
}

function enviarDados2() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var telefone = document.getElementById("telefone").value;
  var celular = document.getElementById("celular").value;
  var endereco = document.getElementById("endereco").value;
  var observacao = document.getElementById("observacao").value;

  if (nome.length < 3 || nome.length > 30)
    swal('Erro', 'Nome invalido', 'error');
  else {
    if (email.length < 0 || email.length > 50)
      swal('Erro', 'Email invalido', 'error');
    else {
      if (telefone <= 0)
        swal('Erro', 'Telefone invalido', 'error');
      else {
        if (celular <= 0)
          swal('Erro', 'Celular invalido', 'error');
        else {
          if (endereco.length < 0)
            swal('Erro', 'Sem Endereco', 'error');
          else {
            if (observacao.length < 0)
              swal('Erro', 'Sem Observaçao', 'error');
            else
              swal("Cadastro realizado com sucesso", '\nNome: ' + nome + '\nEmail: ' + email + '\nTelefone: ' + telefone + '\nCelular: ' + celular + '\nEndereço: ' + endereco + '\nObservação: ' + observacao, "success");

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


  if (codigoProduto.length < 3 || codigoProduto.length > 30)
    swal('Erro', 'Codigo invalido', 'error');
  else {
    if (nomeProduto.length < 0 || nomeProduto.length > 50)
      swal('Erro', 'Nome invalido', 'error');
    else {
      if (precoCompra <= 0)
        swal('Erro', 'Valor do preço de compra invalido', 'error');
      else {
        if (precoVenda <= 0)
          swal('Erro', 'Valor do ´preço de venda invalido', 'error');
        else {
          if (quantidade <= 0)
            swal('Erro', 'Quantidade invalida', 'error');
          else {
            if (fornecedor.length = 0)
              swal('Erro', 'Fornecedor desconhecido', 'error');
            else
              swal('Cadastro realizado com sucesso', '\nCodigo do Produto: ' + codigoProduto + '\nNome do Produto: ' + nomeProduto + '\nPreço de compra: ' + precoCompra + '\nPreço de Venda: ' + precoVenda + '\nQuantidade: ' + quantidade + '\nFornecedor: ' + fornecedor, "success");
          }
        }
      }
    }
  }
}
