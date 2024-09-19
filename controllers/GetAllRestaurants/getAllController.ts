import { Request, Response } from "express";
import RestauranteRepositorio from "../../repositories/RestauranteRepositorio/RestauranteRepositorio";


let getAllRestaurants= async (req: Request, res: Response) => {
  try {
    const restaurantes = await RestauranteRepositorio.all();
    return res.status(200).json(
      {
        restaurantes
      }
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default getAllRestaurants;