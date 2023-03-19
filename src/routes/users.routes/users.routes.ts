import express from 'express';
import { getAllUsers, addNewUser, logInUser } from "../../controllers/users.controller"


const router = express.Router();
router.post("/", addNewUser);
router.post("/login", logInUser);
router.get("/",getAllUsers );


export default router;