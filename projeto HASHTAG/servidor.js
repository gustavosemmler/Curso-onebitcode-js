const http = require('http');
const express = require('express');
const aplicacao = express();
const io = require('socket.io')

const servidorHttp = http.createServer(aplicacao);

aplicacao.use(express.static('public'));

servidorHttp.listen(1000);