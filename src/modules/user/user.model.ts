import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, 'Name must be required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'email must be required'],
        trim: true,
        unique: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: [true, 'phone number must be required'],
        trim: true,
        minlength: 11,
        maxlength: 11
    },
    password: {
        type: String,
        required: [true, 'Password must be required'],
        trim: true,
        minlength: 6,
        maxlength: 8
    },
    role: {
        type: String,
        enum: ['Admin', 'Customer'],
        default: 'Admin',
    }
});

const User = model<IUser>('User', userSchema);

export default User;