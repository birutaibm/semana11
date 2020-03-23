const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({
    message: 'Hello World',
    evento: 'Semana OmniStack 11',
    aluno: 'Rafael Arantes'
  });
});

app.listen(3333);