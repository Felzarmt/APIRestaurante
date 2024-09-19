"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protegida = void 0;
const protegida = (req, res) => {
    res.send({ mensaje: "Este es un recurso protegido" });
};
exports.protegida = protegida;
