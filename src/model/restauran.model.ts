import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface IRestaurant{
    img?: string;
    name?: string;
    chef?: string;
    rating?: string;
    className?: string;
    id?: number;
    address?: string[];
    chefId?: number;
    openHours?: number[] | undefined;
    openDays?: number[] | undefined;
    openYear?: number;
    dishes?: number[];
    popular?: false;
    openNow?: boolean;
    newRest?:boolean;
  }

export const restaurantSchema = new Schema({
    img:{type: String}, 
    name:{type: String}, 
    chef:{type: String}, 
    rating:{type: String}, 
    className:{type: String}, 
    id: {type: Number},
    address:{type: [String]}, 
    chefId: {type: Number},
    openHours: {type:[Number]},
    openDays: {type: [Number]},
    openYear:{type: Number},
    dishes:{type: [Number]},
    popular: {type: Boolean},
    openNow: {type: Boolean},
    newRest: {type: Boolean},

})

export const RestaurantModal = mongoose.model("restaurants", restaurantSchema);