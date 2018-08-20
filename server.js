const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('final'));

/* app.get('/produtos', function (request, response) {
  response.send([
    'Arroz',
    'Feijão',
    'Carne',
    'Frango',
    'Alface',
    'Amendoim',
    'Laranja',
    'Leite',
    'Suco',
    'bolacha',
    'pão',
    'queijo',
    'Tomate',
    'tempero'
  ])
}); */

app.listen(port, function () {
  console.log('Started on port ' + port)
});
