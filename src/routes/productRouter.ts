import { Router } from 'express';
import { getAll, newDiscipline, getPorCodigo } from '../controllers/productController.js';
import validateSchema from '../middlewares/validateSchemaMiddleware.js';
import productSchema from '../schemas/productSchema.js';

const productRouter = Router();

productRouter.get('/disciplina', getAll);
productRouter.post('/disciplina', validateSchema(productSchema), newDiscipline);
productRouter.post('/codigo', getPorCodigo)

export default productRouter;
