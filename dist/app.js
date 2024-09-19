"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routeRegistro_1 = __importDefault(require("./routes/Registro/routeRegistro"));
const auth_1 = __importDefault(require("./routes/Auth/auth"));
const route_update_1 = __importDefault(require("./routes/Update/route-update"));
const getRouter_1 = __importDefault(require("./routes/get-router/getRouter"));
const routeDelete_1 = __importDefault(require("./routes/Delete/routeDelete"));
const app = (0, express_1.default)();
const PORT = 10101;
app.use(express_1.default.json());
app.use('/', routeRegistro_1.default);
app.use('/', auth_1.default);
app.use('/', route_update_1.default);
app.use('/', getRouter_1.default);
app.use('/', routeDelete_1.default);
app.listen(PORT, () => {
    console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
    throw new Error(error.message);
});
