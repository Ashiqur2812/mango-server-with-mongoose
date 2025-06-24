import { model, Schema } from "mongoose";
import { IOrder } from "./order.interface";

const orderAddressSchema = new Schema({
    zipCode: String,
    state: String,
    country: String,
    street: String
});

const orderSchema = new Schema<IOrder>({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        trim: true
    },
    mango: {
        type: Schema.Types.ObjectId,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        min: [0, '{VALUE} is not a valid number']
    },
    totalPrice: {
        type: Number,
        required: true,
        min: [0, '{VALUE} is not a valid number']
    },
    address: {
        type: orderAddressSchema,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
}
);

const Order = model('Order', orderSchema);
export default Order;