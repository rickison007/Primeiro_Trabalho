import express from "express";
// import Aluno from "../models/Aluno_Model.js";
import { createAluno, updateAluno, deleteAluno, getAluno, getAlunos } from
"../controllers/AlunoController.js";
const router = express.Router();

router.post("/", createAluno);
router.put("/:id", updateAluno);
router.delete("/:id", deleteAluno);
router.get("/:id", getAluno);
router.get("/", getAlunos);
export default router;