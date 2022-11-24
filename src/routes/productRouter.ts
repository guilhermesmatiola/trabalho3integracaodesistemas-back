import { Router } from 'express';
import { getAll, newDiscipline, getPorCodigo } from '../controllers/productController';
import validateSchema from '../middlewares/validateSchemaMiddleware';
import productSchema from '../schemas/productSchema';

const productRouter = Router();

productRouter.get('/disciplina', getAll);
productRouter.post('/disciplina', validateSchema(productSchema), newDiscipline);
productRouter.post('/codigo', getPorCodigo)

export default productRouter;
