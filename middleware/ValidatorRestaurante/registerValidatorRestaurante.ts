import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";

const validatorParamsRestaurante = [
    check("nombre").isLength({ min: 1, max: 50 }),
    check("direccion").isLength({ min: 1, max: 50 }),
    check("email").notEmpty().isEmail(),
    check("password").isLength({ min: 8, max: 15 }),
    check("telefono").isLength({ min: 1, max: 11})
]

const validator = ( req: Request, res: Response, next : NextFunction)=>{
    
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        console.log("Errores de validación:", errors.array());
        return res.status(422).json({errors : errors.array()})
    }
    next();
}

export default { validatorParamsRestaurante, validator}
