import prisma from './../config/database.js';
import {Disciplinas} from '@prisma/client';

export type TDisciplinas = Omit<Disciplinas, "id">

export async function findAll() {
  return await prisma.disciplinas.findMany()
}

export async function insert(data:TDisciplinas) {
  await prisma.disciplinas.create({data})
}

export async function getDisciplinaByCodigo(codigo: string) {
	return await prisma.disciplinas.findMany({ where: {codigo} });
}