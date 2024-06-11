import ParafusoModel from "../Models/ParafusoModel.js";

class ParafusoController{
    constructor(){
        this.parafusos = [
            {nome:"estrela"},
            {nome:"francês"},
            {nome:"máquina"}
        ];
    }
    create(req,res){
        const nome = req.body.nome;
        ParafusoModel.create(nome).then(
            resposta =>{
                console.debug("Inserindo um Parafuso");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro: Inserindo um Parafuso");
                res.status(resposta[0]).json(resposta[1])

            }    
        )

    }


    read(req,res){

        const nome = req.body.nome;
        ParafusoModel.create(nome).then(
            resposta =>{
                console.debug("Inserindo um Parafuso");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro: Inserindo um Parafuso");
                res.status(resposta[0]).json(resposta[1])

            }    
        )

    }


    update(req,res){
        const index = req.params.index;
        const nome = req.body.nome;

        ParafusoModel.update(index,nome);
        res.status(200).json("Parafuso Atualizado");
    }

    delete(req,res){
        const index = req.params.index;

        ParafusoModel.delete(index);

        res.status(200).json("Deletado");
    }
}
 
export default new ParafusoController();