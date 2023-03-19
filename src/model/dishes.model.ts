import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface IDish{
    id: number;
    img?: string;
    name?: string;
    icons?: string[] | [];
    about?: string;
    price?: number;
    className?: string;
    onClick?: (id: number) => void;
    time?: string[];
}

export const dishesSchema = new Schema<IDish>({
    id: {type: Number},
    img: {type: String},
    name: {type: String},
    icons: {type: [String]},
    about: {type: String},
    price: {type: Number},
    className: {type: String},
    onClick: {type: Schema.Types.Mixed, required: false},
    time: {type: [String]},
})

export const DishesModal = mongoose.model<IDish>("dishes", dishesSchema);