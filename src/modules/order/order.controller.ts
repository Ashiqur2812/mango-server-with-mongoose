import { Request, Response } from "express";
import Order from "./order.model";

const createOrder = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const data = new Order(payload);
        const order = await data.save();

        res.status(201).json({
            success: true,
            message: 'Orders retrieved successfully',
            order
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Orders retrieved failed',
            error
        });
    }
};

export const orderController = {
    createOrder
};