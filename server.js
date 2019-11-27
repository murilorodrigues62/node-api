const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

// Iniciando o APP
const app = express();
// Possibilitar o uso de JSON
app.use(express.json());
// Habilita acesso a todas as rotas publicamente
app.use(cors());

// Iniciando conexão com o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", 
                    {useUnifiedTopology: true,
                     useNewUrlParser: true});

requireDir("./src/model");

// Configura as rotas definidas no arquivo routes. /api está como prefixo
app.use('/api', require('./src/routes'));

app.listen(3001); // porta
