import express from "express";
// import Aluno from "../models/Aluno_Model.js";
import { createInstrutor, updateInstrutor, deleteInstrutor, getInstrutor, getInstrutores } from
"../controllers/instrutorController.js";
const router = express.Router();

router.post("/", createInstrutor);
router.put("/:id", updateInstrutor);
router.delete("/:id", deleteInstrutor);
router.get("/:id", getInstrutor);
router.get("/", getInstrutores);
export default router;