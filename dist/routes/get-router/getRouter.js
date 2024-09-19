"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registerValidatorRestaurante_1 = __importDefault(require("../../middleware/ValidatorRestaurante/registerValidatorRestaurante"));
const getRestaurant_1 = __importDefault(require("../../controllers/getRestaurante/getRestaurant"));
const getAllController_1 = __importDefault(require("../../controllers/GetAllRestaurants/getAllController"));
const router = express_1.default.Router();
router.get('/restaurantes', getAllController_1.default);
router.get('/restaurante', registerValidatorRestaurante_1.default.validatorParamsRestaurante, getRestaurant_1.default);
exports.default = router;
