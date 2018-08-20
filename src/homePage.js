var tbody = document.getElementById("tbody");

var dados = [
  ["FXGH-0001", "15", "Bolsa", "10,00"],
  ["FXGH-0002", "25", "Peso de porta", "5,00"],
  ["FXGH-0003", "6", "Porta absorvente", "6,50"],
  ["FXGH-0004", "3", "Carteira masculina", "5,00"],
  ["FXGH-0005", "4", "Porta celular", "7,00"],
];

for (var i = 0; i < dados.length; i++) {
  var tr = "<tr>" +
    "<td>" + dados [i][0] + "</td>" +
    "<td>" + dados [i][1] + "</td>" +
    "<td>" + dados [i][2] + "</td>" +
    "<td>" + dados [i][3] + "</td>" +
    "</tr>";
  tbody.innerHTML += tr;
}

document.getElementById("txtBusca").addEventListener("keyup", filtro);

function filtro() {

  var busca = document.getElementById("txtBusca").value.toLowerCase();

  for (var i = 0; i < tbody.childNodes.length; i++) {
    var achou = false;
    var tr = tbody.childNodes[i];
    var td = tr.childNodes;

    for (var j = 0; j < td.length; j++) {
      var value = td[j].childNodes[0].nodeValue.toLowerCase();

      if (value.indexOf(busca) >= 0) {
        achou = true
      }
    }
    if (achou) {
      tr.style.display = "table-row";
    } else {
      tr.style.display = "none"
    }
  }
}
