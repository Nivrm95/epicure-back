import express from "express";
import {addRestaurant, deleteRestaurant, getAllRestaurant} from "../../controllers/restaurant.controllers"


const router = express.Router();


router.get("/",getAllRestaurant );
router.delete("/:id", deleteRestaurant);
router.post("/",addRestaurant) ;

export default router;

