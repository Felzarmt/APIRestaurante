"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventoDto {
    constructor(id, nombre, fechaInicio, fechaFin, descripcion, ubicacion, idOrganizador) {
        this._id = id;
        this._nombre = nombre;
        this._fechaInicio = fechaInicio;
        this._fechaFin = fechaFin;
        this._descripcion = descripcion;
        this._ubicacion = ubicacion;
        this._idOrganizador = idOrganizador;
    }
    // Getters
    get id() {
        return this._id;
    }
    get nombre() {
        return this._nombre;
    }
    get fechaInicio() {
        return this._fechaInicio;
    }
    get fechaFin() {
        return this._fechaFin;
    }
    get descripcion() {
        return this._descripcion;
    }
    get ubicacion() {
        return this._ubicacion;
    }
    get idOrganizador() {
        return this._idOrganizador;
    }
    // Setters
    set id(id) {
        this._id = id;
    }
    set nombre(nombre) {
        this.nombre = nombre;
    }
    set fechaInicio(fechaInicio) {
        this._fechaInicio = fechaInicio;
    }
    set fechaFin(fechaFin) {
        this._fechaFin = fechaFin;
    }
    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }
    set ubicacion(ubicacion) {
        this._ubicacion = ubicacion;
    }
    set idOrganizador(idOrganizador) {
        this._idOrganizador = idOrganizador;
    }
}
exports.default = EventoDto;
