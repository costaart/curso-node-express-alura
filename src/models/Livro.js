import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

// criar um modelo de livro
const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, required: true},
    editora: {type: String},
    preco: {type: Number},
    paginas: {type: Number},
    autor: autorSchema
}, {versionKey: false});

// referenciar qual coleção se refere (cria no atlas) e qual o schema
const livro = mongoose.model("livros", livroSchema);

export default livro;