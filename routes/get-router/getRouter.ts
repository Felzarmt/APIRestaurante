import express from 'express';
import registerValidatorRestaurante from '../../middleware/ValidatorRestaurante/registerValidatorRestaurante';
import getRestaurante from '../../controllers/getRestaurante/getRestaurant';
import getAllRestaurants from '../../controllers/GetAllRestaurants/getAllController';


const router = express.Router();

router.get('/restaurantes',getAllRestaurants)
router.get('/restaurante',registerValidatorRestaurante.validatorParamsRestaurante, getRestaurante);

export default router;