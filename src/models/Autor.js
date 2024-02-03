import mongoose from "mongoose";

// criar um modelo de livro
const autorSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    nacionalidade: {type: String}
}, {versionKey: false});

// referenciar qual coleção se refere (cria no atlas) e qual o schema
const autor = mongoose.model("autores", autorSchema);

export {autor, autorSchema};