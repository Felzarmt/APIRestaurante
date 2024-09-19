"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RestauranteService_1 = __importDefault(require("../../services/Restaurante/RestauranteService"));
const Auth_1 = __importDefault(require("../../Dto/Restaurante/AuthRestaurante/Auth"));
const generateToken_1 = __importDefault(require("../../Helpers/generateToken"));
let auth = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = request.body;
        const login = yield RestauranteService_1.default.login(new Auth_1.default(email, password));
        if (login.logged) {
            return response.status(200).json({
                status: login.status,
                token: (0, generateToken_1.default)({ id: login.id }, process.env.KEY_TOKEN, 5),
            });
        }
        return response.status(401).json({
            status: login.status
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = auth;
