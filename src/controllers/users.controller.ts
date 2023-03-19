import { Request, Response } from 'express';
import { addUser, getUsers } from '../service/users.service';
import { UserModel } from '../model/users.model';



const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


  export const getAllUsers = async (req: Request, res: Response) => {
    try {
      const Users = await getUsers();
   
      return res
        .status(200)
        .json(Users);
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };
export const addNewUser = async (req: Request, res: Response) => {
    try {
       
        if (!(req.body.firstName && req.body.lastName && req.body.email && req.body.userName && req.body.password)) {
            res.status(400).send("all fields are required")
        }

        const oldUser = await UserModel.findOne({ email:req.body.email});

        if (oldUser) {
            return res.status(409).send("User with this email already exists. please log in.")
        }

        const encrypted_password = await bcrypt.hash(req.body.password, 10);

        const user = await addUser({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            email: req.body.email.toLowerCase(),
            password: encrypted_password,
            reducer: undefined,
            role:req.body.role,
        });

        const token = jwt.sign(
            { user_id: user._id, email:req.body.email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );
        user.token = token;
        user.save()

        return res
            .status(200)
            .json({
                status: 200,
                data: user,
                message: "user created successfully"
            })
    }
    catch (err: any) {
        console.log(err);
    }
}

export const logInUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            res.status(400).send('All fields are required.');
        }
        const user = await UserModel.findOne({ email });

        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );

            user.token = token;

            return res.status(200).json(user);
        }
        res.status(400).send("Invalid Credentials");
    }
    catch (err) {
        console.log(err);
    }
}
