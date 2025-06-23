import { Router } from "express";
import { registerUser, getAllUser, getSingleUser, updateUser, deleteUser } from "./user.controller";

const userRoute = Router();

userRoute.get('/', getAllUser);
userRoute.get('/:userId', getSingleUser);
userRoute.post('/', registerUser);
userRoute.patch('/:userId', updateUser);
userRoute.delete('/:userId', deleteUser);

export default userRoute;