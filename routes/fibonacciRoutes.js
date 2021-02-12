import express from 'express';
const router = express.Router();
import getByIndex from '../controllers/getByIndex';
import fibonacciValidation from '../middlewares/fibonacciValidation';

router.get('/fibonacci/:index',
    [fibonacciValidation,getByIndex]);

export default router;
