import jwt  from 'jsonwebtoken';
import { NextFunction } from 'express';
import { Request, Response } from 'express';


export function validateToken (req:Request, res:Response, next:NextFunction){
    const token = req.header('authorization')?.split(" ")[1];
    if(!token) return res.status(401).json({message: 'Token not provided'});
    const key = process.env.KEY_TOKEN
    try {
        const verifyToken = jwt.verify(token,key as string)
        next();
    } catch (error) {
        res.status(403).json({message:"Error en la autenticación de token"})
    }
}