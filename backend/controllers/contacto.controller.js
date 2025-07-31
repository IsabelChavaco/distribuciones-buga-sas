import Contacto from "../models/Contacto.js";

export const enviarMensaje = async (req, res) => {
  const nuevoMensaje = new Contacto(req.body);
  await nuevoMensaje.save();
  res.status(201).json({ mensaje: "Mensaje recibido" });
};
