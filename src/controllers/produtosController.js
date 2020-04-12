const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async creat(request, response) {
    const { title, description, quantity, value } = request.body;
    const id = crypto.randomBytes(8).toString("HEX");
    console.log(request.body);
    await connection("produtos").insert({
      id,
      title,
      description,
      quantity,
      value
    });

    return response.json(id);
  },
  async index(request, response) {
    const produtos = await connection("produtos").select("*");
    return response.json(produtos);
  }
};
