import express from "express";
import { routes } from "./routes";

const app = express();

// GET, POST, PUT, PATCH, DELETE

// GET = Buscar informações
// POST = Cadastrar informações
// PUT = Atualizar informações de uma entidade
// PATCH = Atualizar uma informação única de uma entidade
// DELETE = Deletar uma informação

app.use(express.json()); // plug-in
app.use(routes);

app.listen(3333, () => {
  console.log("HTTP server running");
});
