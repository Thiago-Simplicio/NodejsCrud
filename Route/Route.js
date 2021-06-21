const express = require("express");
const route = express.Router();

const Usuario = require("../Controller/ControllerUsuario");

//Rotas de Usuarios//CRUD
route.get("/usuario", Usuario.index);
route.post("/usuario", Usuario.create);
route.get("/usuario/:nick_name", Usuario.listar);
route.delete("/usuario/:_id", Usuario.delete);
route.put("/usuario/:_id", Usuario.update);

module.exports = route;
