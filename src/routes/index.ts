import express from "express"
import chefs from "../routes/chefs.routes/chefs.route";
import restaurants from "../routes/restaurant.routes/restaurant.routes";
import dishes from "../routes/dishes.routes/dishes.routs";
import users from "./users.routes/users.routes"

const router = express.Router();

router.use("/chefs", chefs) 
router.use("/restaurants", restaurants) 
router.use("/dishes", dishes) 
router.use("/users", users) 

export default router;