var dados = [
  ["Jean Rodrigues", "jeanrodrigues@gmail.com", "85-98365-5259", "Ativo"],
  ["Lívia Rodrigues", "jeanrodrigues@gmail.com", "85-98365-5259", "Bloqueado"],
  ["Thiago Rodrigues", "jeanrodrigues@gmail.com", "85-98365-5259", "Ativo"],
  ["John Rodrigues", "jeanrodrigues@gmail.com", "85-98365-5259", "Bloqueado"],
  ["Jade Rodrigues", "jeanrodrigues@gmail.com", "85-98365-5259", "Ativo"],
  ["Jonas Rodrigues", "jeanrodrigues@gmail.com", "85-98365-5259", "Ativo"],
  ["Joel Rodrigues", "jeanrodrigues@gmail.com", "85-98365-5259", "Bloqueado"],
  ["Adriano Rodrigues", "jeanrodrigues@gmail.com", "85-98365-5259", "Ativo"]
];

var tbody = document.getElementsByid("tbody");
for (var i = 0; i <dados.length; i++) {
  var tr = "<tr>" +
  "<td>" + dados [i][0] + "</td>" +
  "<td>" + dados [i][1] + "</td>" +
  "<td>" + dados [i][2] + "</td>" +
  "<td>" + dados [i][3] + "</td>" +
    "</tr>";
  tbody.innerHTML += tr;
}

var tr = tbody.childNodes;


document.getElementsById("txtBusca").addEventListener("keyup", function () {
  var busca = document.getElementsById("txtBusca").value.toLowerCase();

  for  (var i = 0; i < tbody.childNodes.length; i++) {
   var achou = false;
   var tr = tbody.childNodes[i];
   var td = tr.childNodes;

   for (var j =0; j <td.length; j++) {
     var value = td[j].childNodes[0].nodeValue.toLowerCase();

     if (value.indexOf(busca) >=0) {
       achou = true
     }
   }
if (achou) {
  tr.style.display = "table-row";
} else {
     tr.style.display = "none"
}

  }
});
