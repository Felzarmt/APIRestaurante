import { Response, Request } from 'express';
import RestauranteService from '../../services/Restaurante/RestauranteService';


const updateRestaurante = async (request: Request, response: Response)=>{

    try {
        const { nombre, direccion, email, telefono, password} = request.body;
    
        const organizadorActualizado  = await RestauranteService.actualizar(password,email,{nombre, direccion, telefono});

        return response.status(200).json(organizadorActualizado);
        
    } catch (error) {
        console.log(error);
        return response.status(500).json({ message: 'Error interno del servidor' });
    }
}

export default updateRestaurante;