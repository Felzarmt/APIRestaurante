"use strict";
/**
 * id int auto_increment primary key,
    nombre varchar(50) not null,
    email varchar(100) not null,
    password varchar(65) not null,
    telefono int not null
 */
Object.defineProperty(exports, "__esModule", { value: true });
class RestauranteDto {
    constructor(nombre, direccion, email, password, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._email = email;
        this._password = password;
        this._telefono = telefono;
    }
    // Getters
    get nombre() {
        return this._nombre;
    }
    get direccion() {
        return this._direccion;
    }
    get email() {
        return this._email;
    }
    get password() {
        return this._password;
    }
    get telefono() {
        return this._telefono;
    }
    // Setters
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set direccion(direccion) {
        this._direccion = direccion;
    }
    set email(email) {
        this._email = email;
    }
    set password(password) {
        this._password = password;
    }
    set telefono(telefono) {
        this._telefono = telefono;
    }
}
exports.default = RestauranteDto;
