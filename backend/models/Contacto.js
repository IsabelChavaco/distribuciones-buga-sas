import mongoose from "mongoose";

const contactoSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  mensaje: String,
  fecha: { type: Date, default: Date.now }
});

export default mongoose.model("Contacto", contactoSchema);
