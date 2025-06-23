import { Router } from "express";
import { registerUser, getAllUser, getSingleUser, updateUser, deleteUser } from "./user.controller";

const userRoute = Router();

userRoute.get('/all-user', getAllUser);
userRoute.get('/user/:userId', getSingleUser);
userRoute.post('/user', registerUser);
userRoute.patch('/update-user/:userId', updateUser);
userRoute.delete('delete-user/:userId', deleteUser);

export default userRoute;