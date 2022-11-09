import Exercicio from "../models/Exercicio_Model.js";

export const createExercicio = async (req, res, next) => {
    const exercicio = new Exercicio(req.body);
    try {
        const createExercicio = await exercicio.save();
        res.status(201).json(createExercicio);
    } catch (error) {
        next(error);
    }
};
export const updateExercicio = async (req, res, next) => {
    try {
        const updateExercicio = await Exercicio.findByIdAndUpdate(req.params.id, { $set:
req.body }, { new: true });
        res.status(200).json(updateExercicio);
    } catch (error) {
        next(error);
    }
};
export const deleteExercicio = async (req, res, next) => {
    try {
        await Exercicio.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Exercicio excluído com sucesso." });
    } catch (error) {
        next(error);
    }
};
export const getExercicio = async (req, res, next) => {
    try {
        const exercicio = await Exercicio.findById(req.params.id);
        res.status(200).json(exercicio);
    } catch (error) {
        next(error);
    }
};
export const getExercicios = async (req, res, next) => {
    try {
        const exercicio = await Exercicio.find();
        res.status(200).json(exercicio);
    } catch (error) {
        next(error);
    }
};