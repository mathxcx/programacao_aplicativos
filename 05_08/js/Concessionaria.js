import { Carro } from './Carro.js'

export class Concessionaria {
    constructor() {
        //Ao usar o this nos criamos ou manipulamos arrays e/ou var
        this.carros = []

        // Criando um objeto e depois adicionando na lista
        let uno = new Carro("fiat", "XXY-4502", "Vermelho", 2012)
        this.carros.push(uno)

        //Criando objetos e ja acrescentando elus na lista
        this.carros.push(new Carro("wolkswagen", "uuu-3502", "branco", 2015))
        this.carros.push(new Carro("fiat", "uuu-3604", "branco", 2004))
        this.carros.push(new Carro("chevrolet", "uuu-3452", "azul", 2024))



    }
    removerCarro(index) {
        alert(this.carros[index].marca + "Deletado!")
        //O metodo splice altera o conteudo de uma lista podendo adicionar enquanto remove o elemento
        // Abaixo vamos remover um elemento especifico

        this.carros.splice(index, 1)
        //index apresenta a posicao do array e o numero e a quantidade de itens
        this.carregarCarros()


    }

    carregarCarros() {
        let html = "<tr><th>Index</th><th>Marca</th><th>Placa</th><th>Cor</th><th>Ano</th><th>Deletar</th></tr>"

        for (let i = 0; i < this.carros.length; i++) {
            html += "<tr>"
            html += "<td>" + i + "</td>"
            html += "<td>" + this.carros[i].marca + "</td>"
            html += "<td>" + this.carros[i].placa + "</td>"
            html += "<td>" + this.carros[i].cor + "</td>"
            html += "<td>" + this.carros[i].ano + "</td>"
            html += '<td><button onclick="window.novaConcessionaria.removerCarro(' + i + ')">Deletar</button></td>'
            html += "</tr>"


        }
        document.getElementById("listaCarros").innerHTML = html
    }

    cadastrarCarro() {
        let marca = document.getElementById("marca").value
        let placa = document.getElementById("placa").value
        let cor = document.getElementById("cor").value
        let ano = parseInt(document.getElementById("ano").value)

        let carro = new Carro(marca, placa, cor, ano)

        this.carros.push(carro)
        alert(this.carros[this.carros.length - 1].marca + "Cadastrado com sucesso!")
        this.carregarCarros()
        this.limparCampos()

    }

    limparCampos() {
        document.getElementById("marca").value = ""
        document.getElementById("placa").value = ""
        document.getElementById("cor").value = ""
        document.getElementById("ano").value = ""




    }

}