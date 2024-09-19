import express from 'express';
import deleteController from '../../controllers/DeleteRestaurante/deleteController';
import { validateToken } from '../../middleware/ValidatorRestaurante/validateToken';

const router = express.Router();

router.delete('/delete', validateToken,deleteController);

export default router;