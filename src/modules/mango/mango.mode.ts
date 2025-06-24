import { model, Schema } from "mongoose";
import { IMango } from "./mango.interface";

const mangoSchema = new Schema<IMango>({
    name: {
        type: String,
        required: [true, 'mango name must be required'],
        trim: true
    },
    variety: {
        type: String,
        required: [true, 'variety must be required'],
        trim: true
    },
    unit: {
        type: String,
        enum: ['KG', 'TON'],
        default: 'KG',
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, '{VALUE} is not the valid price']
    },
    stock: {
        type: Number,
        required: true,
        min: [0, '{VALUE} is not a valid stock number']
    },
    origin: {
        type: String,
        required: true,
        trim: true,
        default: 'Unknown'
    },
    season: {
        type: String,
        enum: ['Summer', 'Winter'],
        default: 'Summer',
    }
},
    {
        versionKey: false,
        timestamps: true
    }
);

const Mango = model<IMango>('Mango', mangoSchema);
export default Mango;