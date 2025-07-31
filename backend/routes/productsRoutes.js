const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET - Obtener todos los productos
router.get("/", async (req, res) => {
  try {
    const productos = await Product.find();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ mensaje: "Error al obtener productos", error: err });
  }
});

// POST - Crear nuevo producto
router.post("/", async (req, res) => {
  try {
    const nuevoProducto = new Product(req.body);
    const productoGuardado = await nuevoProducto.save();
    res.status(201).json(productoGuardado);
  } catch (err) {
    res.status(400).json({ mensaje: "Error al crear producto", error: err });
  }
});

module.exports = router;
