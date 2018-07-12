function testando() {
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
              swal("Cadastro realizado com sucesso", '\nCodigo do Produto: ' + codigoProduto + '\nNome do Produto: ' + nomeProduto + '\nPreço de compra: ' + precoCompra + '\nPreço de Venda: ' + precoVenda + '\nQuantidade: ' + quantidade + '\nFornecedor: ' + fornecedor, "success");
          }
        }
      }
    }
  }
}
