const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

//Configurações do servidor
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

//Conexão ao Banco de dados MongoDB
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/Usuarios", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(function () {
    console.log("Servidor conectado ao banco de dados MongoDB");
  })
  .catch(function (error) {
    console.log("Erro ao se conectar com o banco de dados MongoDB" + error);
  });

//Rotas do servidor
const route = require("./Route/Route");
app.use("/", route);

//Porta do servidor
const port = 9091;
app.listen(port, function () {
  console.log("Servidor rodando na porta http://localhost:9091");
});
