"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProtectedController_1 = require("../../controllers/ProtectedRoute/ProtectedController");
const validateToken_1 = require("../../middleware/ValidatorRestaurante/validateToken");
const router = express_1.default.Router();
router.get('/protegida', validateToken_1.validateToken, ProtectedController_1.protegida);
exports.default = router;
