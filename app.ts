import express from 'express';
import routeRegistro from './routes/Registro/routeRegistro';
import auth from './routes/Auth/auth';
import update from './routes/Update/route-update';
import getRouter from './routes/get-router/getRouter';
import routeDelete from './routes/Delete/routeDelete';


const app = express();
const PORT = 10101;

app.use(express.json());

app.use('/', routeRegistro);
app.use('/', auth);
app.use('/', update);
app.use('/',getRouter);
app.use('/', routeDelete);

app.listen(PORT, () => {
    console.log("Servidor ejecutándose en el puerto: ", PORT);
  }).on("error", (error) => {
    throw new Error(error.message);
  });