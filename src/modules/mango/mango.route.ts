import { Router } from "express";
import { mangoController } from "./mango.controller";

export const mangoRoute = Router();

mangoRoute.get('/', mangoController.getAllMango);
mangoRoute.get('/:mangoId', mangoController.getSingleMango);
mangoRoute.post('/', mangoController.createMango),
mangoRoute.patch('/:mangoId', mangoController.updateMango);
mangoRoute.delete('/:mangoId', mangoController.deleteMango);