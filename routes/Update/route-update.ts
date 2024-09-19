import express from 'express'
import updateController from '../../controllers/UpdateRestaurante/update-controller';
import { validateToken } from '../../middleware/ValidatorRestaurante/validateToken';

const router = express.Router();

router.patch('/update', validateToken,updateController);

export default router;