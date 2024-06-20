const express = require('express');
const morgan = require('morgan');

const app = express();


app.use(morgan('dev'));


app.get('/', (req, res) => {
  res.send('Exercício de express - API: Lorena Freitas Corrêa');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` API em NodeJS utilizando o Express com o middleware Morgam para coletar os log's das requisições. Servidor rodando na porta ${PORT} .`);
});
