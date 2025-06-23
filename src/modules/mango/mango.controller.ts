import { Request, Response } from "express";
import Mango from "./mango.mode";

const createMango = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const user = new Mango(payload);
        const data = await user.save();

        res.status(201).json({
            success: true,
            message: 'Mango created successfully',
            data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Mango created failed',
            error
        });
    }
};

const getAllMango = async (req: Request, res: Response) => {
    try {
        const data = await Mango.find();

        res.status(200).json({
            success: true,
            message: 'Mangoes retrieved successfully',
            data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Mangoes retrieved failed',
            error
        });
    }
};

const getSingleMango = async (req: Request, res: Response) => {
    try {
        const mangoId = req.params.mangoId;
        const data = await Mango.findById(mangoId);

        res.status(200).json({
            success: true,
            message: 'Mango retrieved successfully',
            data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Mango retrieved failed',
            error
        });
    }
};

const updateMango = async (req: Request, res: Response) => {
    try {
        const mangoId = req.params.mangoId;
        const updatedBody = req.body;
        const data = await Mango.findByIdAndUpdate(mangoId, updatedBody, { new: true });

        res.status(201).json({
            success: true,
            message: 'Mango updated successfully',
            data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Mango updated failed',
            error
        });
    }
};

const deleteMango = async (req: Request, res: Response) => {
    try {
        const mangoId = req.params.mangoId;
        const data = await Mango.findByIdAndDelete(mangoId);

        res.status(200).json({
            success: true,
            message: 'Mango deleted successfully',
            data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Mango deleted failed',
            error
        });
    }
};

export const mangoController = {
    createMango,
    getAllMango,
    getSingleMango,
    updateMango,
    deleteMango
};