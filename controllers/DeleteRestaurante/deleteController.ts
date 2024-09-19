import { Response, Request } from 'express';
import RestauranteService from '../../services/Restaurante/RestauranteService';

const deleteRestaurante = async (request: Request, response: Response)=>{

    try {
        const { email, password } = request.body;

        const result = await RestauranteService.suprimir(email,password);

        return response.status(200).json(result.message);
    } catch (error) {
        console.log(error);
        
    }
}

export default deleteRestaurante;