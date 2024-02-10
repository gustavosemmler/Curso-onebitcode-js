const http = require('http');
const express = require('express');
const aplicacao = express();

const servidorHttp = http.createServer(aplicacao);
const io = require('soket.io')

io.addListener('connection', (socket) => {
    console.log('um usuário conectou')
})

aplicacao.use(express.static('public'));

servidorHttp.listen(1000);