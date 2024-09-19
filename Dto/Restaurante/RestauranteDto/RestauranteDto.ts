/**
 * id int auto_increment primary key,
    nombre varchar(50) not null,
    email varchar(100) not null,
    password varchar(65) not null,
    telefono int not null
 */

class RestauranteDto{

    private _nombre : string;
    private _direccion : string;
    private _email : string;
    private _password : string;
    private _telefono : number;

    constructor(nombre : string,direccion: string, email : string, password : string, telefono : number){

        this._nombre = nombre;
        this._direccion = direccion;
        this._email = email;
        this._password = password;
        this._telefono = telefono;
    }

    // Getters
    get nombre(): string{
        return this._nombre;
    }
    get direccion():string{
        return this._direccion;
    }
    get email(): string{
        return this._email;
    }
    get password(): string{
        return this._password;
    }
    get telefono(): number{
        return this._telefono;
    }

    // Setters
    set nombre(nombre: string){
        this._nombre = nombre;
    }
    
    set direccion(direccion: string){
        this._direccion = direccion;
    }
    set email(email: string){
        this._email = email;
    }

    set password(password: string){
        this._password = password;
    }

    set telefono(telefono: number){
        this._telefono = telefono;
    }
}

export default RestauranteDto;