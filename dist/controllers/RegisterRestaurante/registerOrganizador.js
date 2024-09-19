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
const RestauranteRepositorio_1 = __importDefault(require("../../repositories/OrganizadorRepositorio/RestauranteRepositorio"));
const RestauranteDto_1 = __importDefault(require("../../Dto/Restaurante/RestauranteDto/RestauranteDto"));
const RestauranteService_1 = __importDefault(require("../../services/Restaurante/RestauranteService"));
const registerRestaurante = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, direccion, email, password, telefono } = request.body;
        if (yield RestauranteRepositorio_1.default.emailExiste(email)) {
            return response.status(400).json({ message: 'El correo electrónico ya está registrado' });
        }
        const registroOrganizador = yield RestauranteService_1.default.registro(new RestauranteDto_1.default(nombre, direccion, email, password, telefono));
        return response.status(201).json({ message: 'Registro exitoso' });
    }
    catch (error) {
        if (error) {
            return response.status(500).json({ message: error.sqlMessage });
        }
    }
});
exports.default = registerRestaurante;
