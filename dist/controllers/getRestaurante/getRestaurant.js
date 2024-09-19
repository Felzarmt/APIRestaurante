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
const RestauranteRepositorio_1 = __importDefault(require("../../repositories/RestauranteRepositorio/RestauranteRepositorio"));
const getRestaurante = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = request.body;
        if (yield RestauranteRepositorio_1.default.emailExiste(email)) {
            const restaurante = yield RestauranteRepositorio_1.default.obtenerRestaurante(email);
            return response.status(200).json(restaurante);
        }
        return response.status(400).json({ message: 'Correo electrónico no encontrado' });
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = getRestaurante;
