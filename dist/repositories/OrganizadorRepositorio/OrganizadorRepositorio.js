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
const db_1 = __importDefault(require("../../config/db"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class OrganizadorRepositorio {
    static agregar(organizador) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO organizador(nombre,apellido,email,password,telefono) VALUES(?,?,?,?,?)";
            const values = [
                organizador.nombre,
                organizador.apellido,
                organizador.email,
                organizador.password,
                organizador.telefono,
            ];
            return db_1.default.execute(query, values);
        });
    }
}
_a = OrganizadorRepositorio;
OrganizadorRepositorio.emailExiste = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const query = "SELECT COUNT(*) as count FROM organizador WHERE email = ?";
    const [rows] = yield db_1.default.execute(query, [email]);
    const row = rows[0];
    return row.count > 0;
});
OrganizadorRepositorio.login = (auth) => __awaiter(void 0, void 0, void 0, function* () {
    const query = "SELECT id, password FROM organizador WHERE email = ?";
    const values = [auth.email];
    const result = yield db_1.default.execute(query, values);
    console.log(result[0]);
    if (result[0].length > 0) {
        const passwordValida = yield bcryptjs_1.default.compare(auth.password, result[0][0].password);
        if (passwordValida) {
            return {
                logged: true,
                status: "Autenticación exitosa",
                id: result[0][0].id,
            };
        }
        return { logged: false, status: "Usuario o contraseña inválidos" };
    }
    return { logged: false, status: "Usuario o contraseña inválidos" };
});
OrganizadorRepositorio.obtenerOrganizador = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const query = "SELECT nombre, apellido, telefono,email FROM organizador WHERE email = ?";
    const [result] = yield db_1.default.execute(query, [email]);
    if (result.length > 0) {
        return result[0];
    }
    else {
        return { message: 'Usuario no encontrado' };
    }
});
OrganizadorRepositorio.actualizar = (password, email, datosActualizados) => __awaiter(void 0, void 0, void 0, function* () {
    const query = "SELECT* FROM organizador WHERE email = ?";
    const value = [email];
    const [result] = yield db_1.default.execute(query, value);
    if (result.length > 0) {
        const passwordValida = yield bcryptjs_1.default.compare(password, result[0].password);
        if (passwordValida) {
            const nombre = datosActualizados.nombre == undefined ? result[0].nombre : datosActualizados.nombre;
            const apellido = datosActualizados.apellido == undefined ? result[0].apellido : datosActualizados.apellido;
            const telefono = datosActualizados.telefono == undefined ? result[0].telefono : datosActualizados.telefono;
            const query = "UPDATE organizador SET nombre =  ?, apellido = ?, telefono = ? WHERE id = ?";
            const values = [nombre, apellido, telefono, result[0].id,];
            const [data] = yield db_1.default.execute(query, values);
            return {
                message: "Actualización exitosa"
            };
        }
        else {
            return { message: "Contraseña inválida" };
        }
    }
    return { message: "Organizador no encontrado" };
});
OrganizadorRepositorio.eliminar = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const query = 'Select id, password FROM organizador WHERE email = ?';
    const value = [email];
    const [row] = yield db_1.default.execute(query, value);
    if (row.length > 0) {
        const passwordValida = yield bcryptjs_1.default.compare(password, row[0].password);
        if (passwordValida) {
            63;
            const query1 = 'DELETE FROM organizador WHERE id = ?';
            const value = [row[0].id];
            const result = yield db_1.default.execute(query1, value);
            return { message: 'Eliminado exitosamente' };
        }
        return { message: 'Contraseña inválida' };
    }
    return { message: 'Email incorrecto' };
});
exports.default = OrganizadorRepositorio;
