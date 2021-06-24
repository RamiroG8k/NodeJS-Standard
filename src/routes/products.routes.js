// Common
import { Router } from 'express';
import * as productsCtrl from '../controllers/products.controller';
import { verifyToken } from '../middlewares';

const router = Router();

router.post('/', verifyToken, productsCtrl.createProduct);

router.get('/', verifyToken, productsCtrl.getProducts);

router.get('/:productId', verifyToken, productsCtrl.getProductById);

router.put('/:productId', verifyToken, productsCtrl.updateProductById);

router.delete('/:productId', verifyToken, productsCtrl.deleteProductById);


export default router;
