function testando() {
  var codigoProduto = document.getElementById("codigoProduto").value;
  var nomeProduto = document.getElementById("nomeProduto").value;
  var precoCompra = document.getElementById("precoCompra").value;
  var precoVenda = document.getElementById("precoVenda").value;
  var quantidade = document.getElementById("quantidade").value;
  var fornecedor = document.getElementById("fornecedor").value;


  if (codigoProduto.length < 3 || codigoProduto.length > 30)
    swal("Good job!", "You clicked the button!", "success");
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
              swal("Cadastro realizado com sucesso", '\nCodigo do Produto: ' + codigoProduto + '\nNome do Produto: ' + nomeProduto + '\nPreço de compra: ' + precoCompra + '\nPreço de Venda: ' + precoVenda + '\nQuantidade: ' + quantidade + '\nFornecedor: ' + fornecedor, "success");
          }
        }
      }
    }
  }
}
