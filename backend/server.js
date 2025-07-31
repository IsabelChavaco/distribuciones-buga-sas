const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./routes/productsRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("✅ Bienvenido al backend de Distribuciones Buga SAS");
});

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("✅ MongoDB conectado exitosamente");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend en http://localhost:${PORT}`);
});
