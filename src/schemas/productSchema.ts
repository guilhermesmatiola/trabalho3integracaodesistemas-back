import joi from "joi";

const productSchema = joi.object({
    codigo             :  joi.string().required(),
    nome               :  joi.string().required(),
    carga_horaria      :  joi.string().required(),
    pre_requisito      :  joi.string().required(),
    equivalente        :  joi.string().required(),
    ementa             :  joi.string().required()
});

export default productSchema;