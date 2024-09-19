"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = validateToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function validateToken(req, res, next) {
    var _a;
    const token = (_a = req.header('authorization')) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token)
        return res.status(401).json({ message: 'Token not provided' });
    const key = process.env.KEY_TOKEN;
    try {
        const verifyToken = jsonwebtoken_1.default.verify(token, key);
        next();
    }
    catch (error) {
        res.status(403).json({ message: "Error en la autenticación de token" });
    }
}
