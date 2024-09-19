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
class RestauranteRepositorio {
    static agregar(restaurante) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO RUser(nombre,direccion,email,password,telefono) VALUES(?,?,?,?,?)";
            const values = [
                restaurante.nombre,
                restaurante.direccion,
                restaurante.email,
                restaurante.password,
                restaurante.telefono,
            ];
            return db_1.default.execute(query, values);
        });
    }
    static all() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = `SELECT id,nombre,direccion,telefono FROM RUser`;
                const [rows] = yield db_1.default.execute(sql);
                return rows;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
_a = RestauranteRepositorio;
RestauranteRepositorio.emailExiste = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const query = "SELECT COUNT(*) as count FROM RUser WHERE email = ?";
    const [rows] = yield db_1.default.execute(query, [email]);
    const row = rows[0];
    return row.count > 0;
});
RestauranteRepositorio.login = (auth) => __awaiter(void 0, void 0, void 0, function* () {
    const query = "SELECT id, password FROM RUser WHERE email = ?";
    const values = [auth.email];
    const result = yield db_1.default.execute(query, values);
    console.log(result[0]);
    if (result[0].length > 0) {
        const resultado = result[0][0].password;
        const passwordValida = yield bcryptjs_1.default.compare(auth.password, resultado);
        if (passwordValida) {
            return {
                logged: true,
                status: "Autenticación exitosa",
                id: result[0][0].id,
            };
        }
        return { logged: false, status: "Contraseña invalida" };
    }
    return { logged: false, status: "Contraseña o email invalido" };
});
RestauranteRepositorio.obtenerRestaurante = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const query = "SELECT nombre, direccion, telefono,email FROM RUser WHERE email = ?";
    const [result] = yield db_1.default.execute(query, [email]);
    if (result.length > 0) {
        return result[0];
    }
    else {
        return { message: 'Restaurante no encontrado' };
    }
});
RestauranteRepositorio.actualizar = (password, email, datosActualizados) => __awaiter(void 0, void 0, void 0, function* () {
    const query = "SELECT* FROM RUser WHERE email = ?";
    const value = [email];
    const [result] = yield db_1.default.execute(query, value);
    if (result.length > 0) {
        const passwordValida = yield bcryptjs_1.default.compare(password, result[0].password);
        if (passwordValida) {
            const nombre = datosActualizados.nombre == undefined ? result[0].nombre : datosActualizados.nombre;
            const direccion = datosActualizados.direccion == undefined ? result[0].direccion : datosActualizados.direccion;
            const telefono = datosActualizados.telefono == undefined ? result[0].telefono : datosActualizados.telefono;
            const query = "UPDATE RUser SET nombre =  ?, direccion = ?, telefono = ? WHERE id = ?";
            const values = [nombre, direccion, telefono, result[0].id,];
            const [data] = yield db_1.default.execute(query, values);
            return {
                message: "Actualización exitosa"
            };
        }
        else {
            return { message: "Contraseña inválida" };
        }
    }
    return { message: "Restaurante no encontrado" };
});
RestauranteRepositorio.eliminar = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const query = 'Select id, password FROM RUser WHERE email = ?';
    const value = [email];
    const [row] = yield db_1.default.execute(query, value);
    if (row.length > 0) {
        const passwordValida = yield bcryptjs_1.default.compare(password, row[0].password);
        if (passwordValida) {
            63;
            const query1 = 'DELETE FROM RUser WHERE id = ?';
            const value = [row[0].id];
            const result = yield db_1.default.execute(query1, value);
            return { message: 'Eliminado exitosamente' };
        }
        return { message: 'Contraseña inválida' };
    }
    return { message: 'Email incorrecto' };
});
exports.default = RestauranteRepositorio;
