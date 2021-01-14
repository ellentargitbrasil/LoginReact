// aqui fica minha tabela para exportar para o db e seus respectivos atributos
// para validar formularios em react, usamos schema 

const { Timestamp } = require("mongodb");
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const clienteSchema = new Schema({
    cnpj:{type: String, required:true},
    razao_social:{type:String, required:true},
    dia:{type: Number, required:true},
    horario:{type: String, required:true},
    usuarios:{type: String, required:true}
},
{
    timestamp: true,
}

);

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;