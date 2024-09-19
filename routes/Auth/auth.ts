import express from 'express';
import auth from '../../controllers/AuthRestaurante/auth';
import registerValidatorRestaurante from '../../middleware/ValidatorRestaurante/registerValidatorRestaurante';

const router = express.Router();

router.post('/login',registerValidatorRestaurante.validatorParamsRestaurante,auth);

export default router;