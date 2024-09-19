"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const deleteController_1 = __importDefault(require("../../controllers/DeleteRestaurante/deleteController"));
const validateToken_1 = require("../../middleware/ValidatorRestaurante/validateToken");
const router = express_1.default.Router();
router.delete('/delete', validateToken_1.validateToken, deleteController_1.default);
exports.default = router;
