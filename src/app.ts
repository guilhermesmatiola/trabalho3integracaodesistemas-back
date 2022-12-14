import cors from 'cors';
import dotenv from 'dotenv';
import express, { json } from 'express';
import 'express-async-errors';
import { handleErrorsMiddleware } from './middlewares/errorHandlerMiddleware.js';
import productRouter from './routes/productRouter.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(json());
app.use(productRouter);
app.use(handleErrorsMiddleware);

export default app;
