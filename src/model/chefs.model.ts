import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface IChefs{
    img: string;
    description?: string;
    chefName?: string;
    restsName?: number[] | any;
    chefOfTheWeek?: boolean;
    name?: string;  
    restaurant?:number[] ;
}

export const chefsSchema = new Schema<IChefs>({
    img: {type: String,required:true},
    description:{type: String},
    chefName:{type: String},
    restsName:{type: [Number]},
    chefOfTheWeek: {type: Boolean},
    name: {type: String}, 
    restaurant:{type: [Number]}
})

export const ChefsModal = mongoose.model<IChefs>("chefs", chefsSchema);