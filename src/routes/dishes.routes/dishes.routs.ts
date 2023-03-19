import express from "express";
import { deleteDishes } from "../../controllers/dishes.controllers";
import {getAllDishes} from "../../controllers/dishes.controllers"

const router = express.Router();
router.get("/",getAllDishes );
router.delete("/:id",deleteDishes)

export default router;