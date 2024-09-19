"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validatorParamsOrganizador = [
    (0, express_validator_1.check)("nombre").isLength({ min: 1, max: 50 }),
    (0, express_validator_1.check)("apellido").isLength({ min: 1, max: 50 }),
    (0, express_validator_1.check)("email").notEmpty().isEmail(),
    (0, express_validator_1.check)("password").isLength({ min: 8, max: 15 }),
    (0, express_validator_1.check)("telefono").isLength({ min: 1, max: 11 })
];
const validator = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        console.log("Errores de validación:", errors.array());
        return res.status(422).json({ errors: errors.array() });
    }
    next();
};
exports.default = { validatorParamsOrganizador, validator };
