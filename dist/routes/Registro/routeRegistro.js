"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registerRestaurante_1 = __importDefault(require("../../controllers/RegisterRestaurante/registerRestaurante"));
const registerValidatorRestaurante_1 = __importDefault(require("../../middleware/ValidatorRestaurante/registerValidatorRestaurante"));
const router = express_1.default.Router();
router.post('/register', registerValidatorRestaurante_1.default.validatorParamsRestaurante, registerValidatorRestaurante_1.default.validator, registerRestaurante_1.default);
exports.default = router;
