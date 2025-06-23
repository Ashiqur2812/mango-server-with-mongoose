import { Request, Response } from "express";
import User from "./user.model";

const registerUser = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const user = new User(payload);
        const data = await user.save();

        res.status(201).json({
            success: true,
            message: 'User Registered Successfully',
            data
        });
    } catch (error) {
        res.status(500).json({
            message: "User Registered failed",
            success: false,
            error,
        });
    }
};

const getAllUser = async (req: Request, res: Response) => {
    try {
        const data = await User.find();

        res.status(200).json({
            success: true,
            message: "Users retrieved successfully",
            data
        });
    } catch (error) {
        res.status(500).json({
            message: "Users retrieved failed",
            success: false,
            error,
        });
    }
};

const getSingleUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const data = await User.findById(userId);

        res.status(200).json({
            success: true,
            message: 'User retrieved successfully',
            data
        });
    } catch (error) {
        res.status(500).json({
            message: "User retrieved failed",
            success: false,
            error,
        });
    }
};

const updateUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const updatedBody = req.body;
        const data = await User.findByIdAndUpdate(userId, updatedBody, { new: true });

        res.status(201).json({
            success: true,
            message: 'User updated successfully',
            data
        });
    } catch (error) {
        res.status(500).json({
            message: "User updated failed",
            success: false,
            error,
        });
    }
};

const deleteUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const user = await User.findByIdAndDelete(userId);

        res.status(200).json({
            success: true,
            message: 'User deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: "User deleted failed",
            success: false,
            error,
        });
    }

};

export { registerUser, getAllUser, getSingleUser, updateUser, deleteUser };