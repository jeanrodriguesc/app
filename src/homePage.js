var tbody = document.getElementById("tbody");

var dados = [
  ["Jean Rodrigues", "jeanrodrigues@gmail.com", "85-98365-5259", "Ativo"],
  ["Lívia Rodrigues", "liviarodrigues@gmail.com", "85-98365-5259", "Bloqueado"],
  ["Thiago Rodrigues", "thiagorodrigues@gmail.com", "85-98365-5259", "Ativo"],
  ["John Rodrigues", "johnrodrigues@gmail.com", "85-98365-5259", "Bloqueado"],
  ["James Rodrigues", "jamesrodrigues@gmail.com", "85-98365-5259", "Ativo"],
  ["Jonas Rodrigues", "jonasrodrigues@gmail.com", "85-98365-5259", "Ativo"],
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
