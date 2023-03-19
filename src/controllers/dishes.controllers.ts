import {deleteDishesById,getDishes,} from "../service/dishes.service";
  import express, { Request, Response } from "express";
  
  export const getAllDishes = async (req: Request, res: Response) => {
    try {
      const Dishes = await getDishes();
      return res
        .status(200)
        .json(Dishes);
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };
  
  export const deleteDishes = async (req: Request, res: Response) => {
    try { 
      const id = req.params.id
      console.log("restid",req.params.id);
      const dish = await deleteDishesById(id);

      
      return res
        .status(200)
        .json( {success:true,msg:"Deleted",id:req.params.id});
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };