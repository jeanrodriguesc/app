var productList = [
  'Arroz',
  'Feijão',
  'Carne',
  'Frango',
  'Alface',
  'Amendoim',
  'Laranja',
  'Leite',
  'Suco',
  'bolacha',
  'pão',
  'queijo'
];

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

var listProvider = [
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
  var list = document.querySelector('.list');
  listProvider.forEach(function (n) {
    var item = document.createElement('li');
    item.innerText = n;
    list.appendChild(item)
  })
}

function buscarProvider(e) {
  var search = e.value.toLowerCase();
  var list = document.querySelector('.list');
  list.innerHTML = '';
  listProvider.forEach(function (n) {
    if (n.toLowerCase().startsWith(search)) {
      var item = document.createElement('li');
      item.innerText = n;
      list.appendChild(item)
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
  var list = document.querySelector('.list');
  historic.forEach(function (n) {
    var item = document.createElement('li');
    item.innerText = n;
    list.appendChild(item)
  })
}
