import { Request, Response, NextFunction } from "express";

const checkRole = (wantedRole: string) => async (req: Request, res: Response, next: NextFunction) => {
    return next(); 
};

export default checkRole;