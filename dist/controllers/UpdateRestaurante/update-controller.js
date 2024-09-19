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
const updateRestaurante = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, direccion, email, telefono, password } = request.body;
        const organizadorActualizado = yield RestauranteService_1.default.actualizar(password, email, { nombre, direccion, telefono });
        return response.status(200).json(organizadorActualizado);
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: 'Error interno del servidor' });
    }
});
exports.default = updateRestaurante;
