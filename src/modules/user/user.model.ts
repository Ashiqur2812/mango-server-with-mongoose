import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, 'User name must be required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'User email must be required'],
        trim: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function (value: string) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
            },
            message: (props: any) => `${props.value} is not a valid email address!`
        }

    },
    phone: {
        type: String,
        required: [true, 'User phone number is not valid'],
        trim: true,
        minlength: 11,
        maxlength: 11
    },
    password: {
        type: String,
        required: [true, 'User password must be required'],
        trim: true,
        minlength: 6,
        maxlength: 12
    },
    role: {
        type: String,
        enum: {
            values: [
                'Admin', 'Customer'
            ],
            message:'{VALUE} is not acceptable'
        },
        default: 'Customer',
    }
},
    {
        versionKey: false,
        timestamps: true
    }
);

const User = model<IUser>('User', userSchema);

export default User;

