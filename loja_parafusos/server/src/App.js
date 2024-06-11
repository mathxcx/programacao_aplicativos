import express from "express"; //importado o express
import ParafusoController from "./Controllers/ParafusoController.js";

const server = express(); //iniciando o express

server.use(express.json()); //Configurando o json

server.get('/',(req,res)=>{
    res.status(200).json("Servidor Funcionando");
});

server.get('/parafusos', ParafusoController.read);
server.post('/parafusos', ParafusoController.create);
server.put('/parafusos/:index', ParafusoController.update);
server.delete('/parafusos/:index', ParafusoController.delete);

server.listen(5000);