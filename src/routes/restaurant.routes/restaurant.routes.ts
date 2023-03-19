import express from "express";
import {addRestaurant, deleteRestaurant, getAllRestaurant} from "../../controllers/restaurant.controllers"
import checkRole from '../../middleware/roleMiddleware';

const router = express.Router();


router.get("/",getAllRestaurant );
router.delete("/:id",checkRole("admin"), deleteRestaurant);
router.post("/",checkRole("admin") ,addRestaurant) ;

export default router;

