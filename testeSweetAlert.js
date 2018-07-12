function testando() {
  var codigoProduto = document.getElementById("codigoProduto").value;

  if (codigoProduto.length > 2)
    swal("Hello world!",  codigoProduto);
}
