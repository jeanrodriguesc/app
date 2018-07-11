function sweetAlert() {
  var codigoProduto = document.getElementById("codigoProduto").value;


  if (codigoProduto.length == 0)
    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });
}
