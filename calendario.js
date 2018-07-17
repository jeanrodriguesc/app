function Relogio() {
  var novaHora = new Date();
  var horas = novaHora.getHours();
  var minutos = novaHora.getMinutes();
  var segundos = novaHora.getSeconds();

  hora_actual = horas + ':' + minutos + ':' + segundos;
  document.form_calendario.relogio.value = hora_actual;
  setTimeout("Relogio", 1000);

  Calendario();
}

function Calendario() {
  var data = new Date();
  var ano = data.getFullYear();
  var mes = data.getMonth();
  var dia = data.getDate();
  var dia_Semana = data.getDay();

  var A_mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');
  var A_diaSem = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab');

  data.setDate(1);

  calendario = '<table><tr><th>' + A_mes[mes] + 'de' + ano + '</th></tr>'

  calendario += '<tr>';
  for (var i = 0; i < 7; i++) {
    if (dia_Semana == i)
      calendario += '<td><b>' + A_diaSem[i] + '</b></td>';
    else
      calendario += '<td>' + A_diaSem[i] + '</td>'
  }
  calendario += '</tr>';

  for (i = 0; i < data.getDay(); i++)
    calendario += '<td></td>';

  for (i = 0; i < 31; i++) {
    if (data.getDate() > i) {
      dia_Semana = data.getDay();
      if (dia_Semana == 0)
        calendario += '<tr>';
      if (dia_Semana != 7) {
        if (dia == data.getDate())
          calendario += '<td><b>' + (i + 1) + '</b></td>';
        else
          calendario += '<td>' + (i + 1) + '</td>';
      }
      if (dia_Semana == 7)
        calendario += '</tr>';
    }
    data.setDate(data.getDate() + 1);
  }
  calendario += '<tr><td colspan="7"><form name="form_calendario"><input type="text" name="relogio" size="10" class="relogio"></form></td></tr></table>';

  document.write(calendario);
}

