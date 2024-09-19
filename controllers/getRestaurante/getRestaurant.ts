import { Response, Request } from'express';
import RestauranteRepositorio from '../../repositories/RestauranteRepositorio/RestauranteRepositorio';
import RestauranteService from '../../services/Restaurante/RestauranteService';

const getRestaurante = async (request: Request, response: Response)=>{

    try {
        const { email } = request.body;
        if(await RestauranteService.validEmail(email)){
            const restaurante = await RestauranteService.obternerUnico(email);
            return response.status(200).json(restaurante);   
        }
        return response.status(400).json({ message: 'Correo electrónico no encontrado' });
    } catch (error) {        console.log(error);
        
    }
}

export default getRestaurante;