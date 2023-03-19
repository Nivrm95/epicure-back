import { addRestaurantByUser, deleteRestaurantById, getRestaurant,} from "../service/restaurant.service";
  import express, { Request, Response } from "express";
  import { IDish } from '../model/dishes.model';
  
  export const getAllRestaurant = async (req: Request, res: Response) => {
    try { 
      const Restaurant = await getRestaurant();
      return res
        .status(200)
        .json(Restaurant);
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };

  export const deleteRestaurant = async (req: Request, res: Response) => {
    try { 
      const id = req.params.id
      const rest = await deleteRestaurantById(id);
      return res
        .status(200)
        .json( {success:true,msg:"Deleted",id:req.body.id});
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };

  export const addRestaurant = async (req: Request, res: Response) => {
    try { 
      const restaurantData = req.body;
      const newRestaurant = await addRestaurantByUser(restaurantData);
      return res
        .status(200)
        .json({success:true, msg:"add rest", id:newRestaurant.id ,data:restaurantData});
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };
 