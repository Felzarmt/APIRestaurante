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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const gerenateHash_1 = __importDefault(require("../../Helpers/gerenateHash"));
const RestauranteRepositorio_1 = __importDefault(require("../../repositories/OrganizadorRepositorio/RestauranteRepositorio"));
class RestauranteService {
    static registro(organizador) {
        return __awaiter(this, void 0, void 0, function* () {
            organizador.password = yield (0, gerenateHash_1.default)(organizador.password);
            return yield RestauranteRepositorio_1.default.agregar(organizador);
        });
    }
}
_a = RestauranteService;
RestauranteService.login = (auth) => __awaiter(void 0, void 0, void 0, function* () {
    return yield RestauranteRepositorio_1.default.login(auth);
});
RestauranteService.actualizar = (password, email, datosActualizados) => __awaiter(void 0, void 0, void 0, function* () {
    return yield RestauranteRepositorio_1.default.actualizar(password, email, datosActualizados);
});
exports.default = RestauranteService;
