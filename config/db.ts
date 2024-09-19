import mysql, { Pool,PoolConnection } from 'mysql2';
import dotenv from 'dotenv';


//esto lee el archivo .env que debe estar en el directorio raíz y carga las variables que están definidas en él 
dotenv.config();


const db : Pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    //los dos siguientes atributos pertenecen al método
    connectionLimit: 10,//número de conexiones que el pool puede mantener abiertas de manera simultánea.
    queueLimit: 0//controla cuántas solicitudes pueden estar en cola, en 0 significa que no tiene límites

});

db.getConnection((err: Error | null, connection : PoolConnection)=>{
    if(err){
        console.log('Error en la conexión a la base de datos', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
    // connection.release();//devuelve la conexión al pool de conexiones, más NO la desconecta ------INVESTIGAR MÁS!
});


export default db.promise();