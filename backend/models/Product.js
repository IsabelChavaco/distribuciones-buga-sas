const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  nombre: String,
  descripcion: String,
  precio: Number,
  imagen: String,
});

module.exports = model("Product", productSchema, "productos");
