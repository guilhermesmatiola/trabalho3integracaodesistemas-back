"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var joi_1 = __importDefault(require("joi"));
var productSchema = joi_1["default"].object({
    codigo: joi_1["default"].string().required(),
    nome: joi_1["default"].string().required(),
    carga_horaria: joi_1["default"].string().required(),
    pre_requisito: joi_1["default"].string().required(),
    equivalente: joi_1["default"].string().required(),
    ementa: joi_1["default"].string().required()
});
exports["default"] = productSchema;
