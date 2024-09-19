import db from "../../config/db";
import Auth from "../../Dto/Restaurante/AuthRestaurante/Auth";
import bcrypt from "bcryptjs";
import RestauranteDto from "../../Dto/Restaurante/RestauranteDto/RestauranteDto";

class RestauranteRepositorio {

  static emailExiste = async (email: string) => {
    const query = "SELECT COUNT(*) as count FROM RUser WHERE email = ?";
    const [rows] : any = await db.execute(query, [email]);
    const row = rows[0] as { count: number };
    return row.count > 0;
  };

  static async agregar(restaurante: RestauranteDto) {
    const query =
      "INSERT INTO RUser(nombre,direccion,email,password,telefono) VALUES(?,?,?,?,?)";
    const values = [
      restaurante.nombre,
      restaurante.direccion,
      restaurante.email,
      restaurante.password,
      restaurante.telefono,
    ];

    return db.execute(query, values);
  }

  static login = async (auth: Auth) => {
    const query = "SELECT id, password FROM RUser WHERE email = ?";
    const values = [auth.email];
    const result: any = await db.execute(query, values);

    console.log(result[0])

    if (result[0].length > 0) {
      const resultado= result[0][0].password
      const passwordValida = await bcrypt.compare(
        auth.password,
        resultado
      );

      if (passwordValida) {
        return {
          logged: true,
          status: "Autenticación exitosa",
          id: result[0][0].id,
        };
      }
      return { logged: false, status: "Contraseña invalida" };
    }
    return { logged: false, status: "Contraseña o email invalido" };
  };

  static obtenerRestaurante = async (email: string) => {

    const query =
      "SELECT nombre, direccion, telefono,email FROM RUser WHERE email = ?";
    const [result]: any = await db.execute(query, [email]);

    if (result.length > 0) {
      return result[0];
    } else {
      return { message : 'Restaurante no encontrado'};
    }
  };

  static actualizar = async (password: string,email: string,datosActualizados: { nombre?: string; direccion?: string; telefono?: number }) => {
    const query = "SELECT* FROM RUser WHERE email = ?";
    const value = [email];
    const [result]: any = await db.execute(query, value);

    if (result.length > 0) {
      const passwordValida = await bcrypt.compare(password, result[0].password);

      if (passwordValida) {

        const nombre = datosActualizados.nombre == undefined ? result[0].nombre : datosActualizados.nombre; 
        const direccion = datosActualizados.direccion == undefined ? result[0].direccion : datosActualizados.direccion; 
        const telefono = datosActualizados.telefono == undefined ? result[0].telefono : datosActualizados.telefono; 

        const query = "UPDATE RUser SET nombre =  ?, direccion = ?, telefono = ? WHERE id = ?";
        const values = [ nombre, direccion,telefono,result[0].id,];
        const [data] = await db.execute(query, values);
        return {
          message: "Actualización exitosa"
        };
      }else{
        return { message: "Contraseña inválida" };
      }
    }
    return { message: "Restaurante no encontrado" };
  };

  static eliminar = async( email : string, password : string)=>{
    
    const query = 'Select id, password FROM RUser WHERE email = ?';
    const value = [email];
    const [row] : any= await db.execute(query,value);

    if(row.length > 0){
      const passwordValida = await bcrypt.compare(password, row[0].password);
      if(passwordValida){63
        const query1 = 'DELETE FROM RUser WHERE id = ?';
        const value = [row[0].id];
        const result = await db.execute(query1,value);
        return { message : 'Eliminado exitosamente'};
      }
      return { message: 'Contraseña inválida'};
    }
    
    return { message : 'Email incorrecto'};
    
  }

  static async all() {
    try {
        const sql = `SELECT id,nombre,direccion,telefono FROM RUser`;
        const [rows] = await db.execute(sql);
        return rows;
    } catch (error) {
        throw error;
    }
}
}

export default RestauranteRepositorio;
