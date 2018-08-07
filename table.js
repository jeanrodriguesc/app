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
