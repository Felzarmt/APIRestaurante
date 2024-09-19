import { Request, Response } from "express";
import RestauranteDto from "../../Dto/Restaurante/RestauranteDto/RestauranteDto";
import RestauranteService from "../../services/Restaurante/RestauranteService";
import RestauranteRepositorio from "../../repositories/RestauranteRepositorio/RestauranteRepositorio";



const registerRestaurante = async (request: Request, response: Response) => {
  try {
    const { nombre, direccion, email, password, telefono } = request.body;
    
    if (await RestauranteService.validEmail(email)) {
      return response.status(400).json({ message: 'El correo electrónico ya está registrado' });
  }
		const registroOrganizador = await RestauranteService.registro(new RestauranteDto(nombre,direccion, email, password, telefono));
    
		return response.status(201).json({ message: 'Registro exitoso'});

  } catch (error: any) {
		if (error) {
      return response.status(500).json({ message : error.sqlMessage });
    }
	}
};

export default registerRestaurante;
