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
