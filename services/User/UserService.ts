import generateHash from '../../Helpers/gerenateHash';
import Auth from '../../Dto/Restaurante/AuthRestaurante/Auth';
import RestauranteDto from '../../Dto/Restaurante/RestauranteDto/RestauranteDto';
import RestauranteRepositorio from '../../repositories/RestauranteRepositorio/RestauranteRepositorio';

class UserService{

    static validEmail = async (email: string)=>{
        return await RestauranteRepositorio.emailExiste(email);
    }

    static async registro(restaurante : RestauranteDto){
        restaurante.password = await generateHash(restaurante.password);
        return await RestauranteRepositorio.agregar(restaurante);
    }

    static login = async (auth : Auth)=>{
        return await RestauranteRepositorio.login(auth);
    }

    static actualizar = async (password: string,email: string,datosActualizados: { nombre?: string; direccion?: string; telefono?: number })=>{
        return await RestauranteRepositorio.actualizar(password,email,datosActualizados);
    }

    static obternerUnico = async (email: string)=>{
        return await RestauranteRepositorio.obtenerRestaurante(email);
    }

    static suprimir = async (email: string,password: string)=>{
        return await RestauranteRepositorio.eliminar(email,password);
    }
    
}

export default UserService;