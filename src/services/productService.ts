import * as productRepository from '../repositories/productRepository';

async function findAll() {
  const products = await productRepository.findAll();
  return products;
}

export async function newDiscipline(data: {
  codigo        : string
  nome          :  string;
  carga_horaria : string;
  pre_requisito :  string;
  equivalente   :  string;
  ementa   :  string;
}) {


	await productRepository.insert({
		codigo        : data.codigo,
    nome          :  data.nome,
    carga_horaria : data.carga_horaria,
    pre_requisito :  data.pre_requisito,
    equivalente   :  data.equivalente,
    ementa        :  data.ementa
	});

}

async function findByCodigo(codigo:string) {
  const disciplinaretornada = await productRepository.getDisciplinaByCodigo(codigo);
  return disciplinaretornada
}

const productService = {
  findAll,
  newDiscipline,
  findByCodigo
};

export default productService;
