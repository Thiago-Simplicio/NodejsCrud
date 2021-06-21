const mongoose = require("mongoose");

const DataUsuario = new mongoose.Schema(
  {
    name: String,
    last_name: String,
    nick_name: String,
    address: String,
    bio: String,
  },
  {
    timestamps: true,
  }
);

DataUsuario.pre("save", function (next) {
  if (this.nick_name.length < 30 && this.address.length < 100) {
    next();
  }
});

const Usuario = mongoose.model("Usuarios", DataUsuario);
module.exports = Usuario;
