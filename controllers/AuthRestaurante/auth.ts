import { Request, Response } from "express";
import RestauranteService from "../../services/Restaurante/RestauranteService";
import Auth from "../../Dto/Restaurante/AuthRestaurante/Auth";
import generateToken from "../../Helpers/generateToken";

let auth = async (request: Request, response: Response) => {
  try {
    const {email, password} = request.body;
    const login = await RestauranteService.login(new Auth(email, password));

    if (login.logged) {
      return response.status(200).json({
        status: login.status,
        token: generateToken({ id: login.id }, process.env.KEY_TOKEN, 5),
      });
    }
    return response.status(401).json({
      status: login.status
    });
  } catch (error) {
    console.log(error);
    
  }
};

export default auth;
