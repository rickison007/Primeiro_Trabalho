import express from "express";
// import Aluno from "../models/Aluno_Model.js";
import { createExercicio, updateExercicio, deleteExercicio, getExercicio, getExercicios } from
"../controllers/exercicioController.js";
import { verificarAdmin, verificarToken, verificarUsuario } from "../utils/verificarToken.js";
const router = express.Router();

rrouter.post("/",verificarToken, createExercicio);
router.put("/:id",verificarToken, updateExercicio);
router.delete("/:id",verificarToken, deleteExercicio);
router.get("/:id",verificarToken, getExercicio);
router.get("/",verificarToken, getExercicios);
export default router;