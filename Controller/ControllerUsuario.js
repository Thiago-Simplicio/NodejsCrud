const Usuario = require("../Data/UsuarioSchema");

module.exports = {
  async index(req, res) {
    const user = await Usuario.find();
    return res.json(user);
  },

  async create(req, res) {
    const { name, last_name, nick_name, address, bio } = req.body;

    var data = {};

    var user = await Usuario.findOne({ nick_name });
    if (!user) {
      data = { name, last_name, nick_name, address, bio };
      user = await Usuario.create(data);
      return res.status(200).json(user);
    } else {
      return res.status(400).json({
        message: "usuario já cadastrado ou nickName já utilizado tente outro",
      });
    }
  },

  async listar(req, res) {
    const { nick_name } = req.params;
    var user = await Usuario.findOne({ nick_name });
    return res.json(user);
  },

  async delete(req, res) {
    const { _id } = req.params;
    var user = await Usuario.findOneAndDelete({ _id });
    return res.json({ message: "usuario deletado com sucesso" });
  },

  async update(req, res) {
    const { _id } = req.params;
    const { name, last_name, nick_name, address, bio } = req.body;
    var data = { name, last_name, nick_name, address, bio };
    var user = await Usuario.findOneAndUpdate({ _id }, data, { new: true });
    return res.json(user);
  },
};
