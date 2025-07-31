import Product from "../models/Producto.js";
const Product = require("../models/Product").default;

const getAllProducts = async (req, res) => {
  const productos = await Product.find();
  res.json(productos);
};

const createProduct = async (req, res) => {
  const nuevo = new Product(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};

module.exports = { getAllProducts, createProduct };
