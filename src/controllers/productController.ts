import { Request, Response } from 'express';
import prisma from '../config/database';

import productService from '../services/productService';

export async function getAll(req: Request, res: Response) {
  const products = await productService.findAll();
  res.status(200).send(products);
}

export async function newDiscipline(req: Request, res: Response) {
	const data = req.body;

	await productService.newDiscipline(data);

	res.sendStatus(201);
}

export async function getPorCodigo(req: Request, res: Response) {
	let {codigo} = req.body;
	const retorno = await productService.findByCodigo(codigo);
	res.status(200).send(retorno)
}