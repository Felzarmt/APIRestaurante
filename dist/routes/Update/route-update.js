"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const update_controller_1 = __importDefault(require("../../controllers/UpdateRestaurante/update-controller"));
const validateToken_1 = require("../../middleware/ValidatorRestaurante/validateToken");
const router = express_1.default.Router();
router.patch('/update', validateToken_1.validateToken, update_controller_1.default);
exports.default = router;
