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

var listFornecedor = [
  'João',
  'Lucas',
  'Thiago',
  'Matheus',
  'Paulo',
  'Judas',
  'Pedro',
  'Jesus'
  ];

function loadFornecedorname() {
  var forn = document.querySelector('.forn');
  listFornecedor.forEach(function (n) {
    var item = document.createElement('li');
    item.innerText = n;
    forn.appendChild(item)
  })
}

function buscarFornecedor(e) {
  var buscar = e.value.toLowerCase();
  var forn = document.querySelector('.forn');
  forn.innerHTML = '';
  listFornecedor.forEach(function (n) {
    if (n.toLowerCase().startsWith(buscar)) {
      var item = document.createElement('li');
      item.innerText = n;
      forn.appendChild(item)
    }
  })
}
