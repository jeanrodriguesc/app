const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('final'));
app.listen(port, function () {
  console.log('Started on port ' + port)
});
