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
  var nome = document.getElementById("nome");
  var email = document.getElementById("email");
  var telefone = document.getElementById("telefone");
  var celular = document.getElementById("celular");
  var anotacoes = document.getElementById("anotacoes");

  alert('Cadastro realizado com sucesso\nNome: ' + nome + '\nEmail: ' + email + '\nTelefone: ' + telefone + '\nCelular: ' + celular + '\nAnotações: ' + anotacoes);
}
