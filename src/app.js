// Importa o framework
import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";

const conexao = await conectaNaDatabase();
// parei aqui


const app = express();
app.use(express.json());

// Cria o array para GET/POST
const livros = [{
        id: 1,
        titulo: "O Senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
];

// Função que retorna qual index do array está o id buscado
function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    });
}

// Rota Padrão
app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js!");
});

// Rota para exibir os Livros (GET)
app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});


// Rota para exibir livro via parâmetro da URL: /livros/(id)
app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

// Cadastrar um novo livro via body (POST)
app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso!");
})

// Fazer um UPDATE (PUT)
app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
})

// Fazer um DELETE (DELETE)
app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso");
})





export default app;
