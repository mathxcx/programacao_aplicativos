

//A funcao pop remove apenas o ultimo elemento
/*function removerCarro(arrayCarro){
    arrayCarro.pop()
    console.log(arrayCarro)
}*/


// Inicializando um array vazio
let carros = []
//Criando um carro uno
let uno = new Carro("fiat", "xxy-4502", "vermelho", 2012)
carros.push(uno) // Acrescentando o uno no array de carros

//Criando um carro fusca
let fusca = new Carro("wolkswagen", "uuu-3502", "branco", 2015)
carros.push(fusca) //Acrescentando um fusca no array de carros

//Criando um carro strada
let strada = new Carro("fiat", "uuu-3604", "branco", 2004)
carros.push(strada) //Acrescentando um strada no array de carros


//Criando um carro onix
let onix = new Carro("chevrolet", "uuu-3452", "azul", 2024)
carros.push(onix) //Acrescentando um strada no array de carros

console.log(carros)


//removerCarro(carros)