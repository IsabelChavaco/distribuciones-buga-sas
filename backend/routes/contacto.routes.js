import express from "express";
import { enviarMensaje } from "../controllers/contacto.controller.js";

const router = express.Router();

router.post("/", enviarMensaje);

export default router;
