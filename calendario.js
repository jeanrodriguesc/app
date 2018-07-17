function Relogio() {
  var novaHora = new Date();
  var horas = novaHora.getHours();
  var minutos = novaHora.getMinutes();
  var segundos = novaHora.getSeconds();

  hora_actual = horas + ':' + minutos + ':' + segundos;
  document.form_calendario.relogio.value = hora_actual;
  setTimeout("Relogio", 1000);
}


  calendario += '<tr><td colspan="7"><form name="form_calendaro"><input type="text" name="relogio" size="10" class="relogio" /></form></td></tr></table></center>';

  document.write(calendario);
}
