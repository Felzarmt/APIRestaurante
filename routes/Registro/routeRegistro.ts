import express from 'express';
import registerOrganizador from '../../controllers/RegisterRestaurante/registerRestaurante';
import registerValidatorRestaurante from '../../middleware/ValidatorRestaurante/registerValidatorRestaurante';


const router = express.Router();


router.post('/register', registerValidatorRestaurante.validatorParamsRestaurante, registerValidatorRestaurante.validator, registerOrganizador);




export default router;