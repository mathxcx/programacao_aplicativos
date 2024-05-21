//Quando a página web é carregada o navegador cria um document object model (DOM)
// o DOM possui uma árvore de objetos
document.getElementById("saudacao").innerHTML = "Boa Terça-Feira :)"
//Adicionando uma saudação a uma div com id saudacao

 let h1 = document.getElementsByTagName("h1") // Pegando um array com todos os elementos h1

 h1[0].innerText = "Introducao"
 h1[1].innerText = "SENAI PORTO"

 let descricao = document.getElementsByClassName("descricao") // Pegando um array com cada elemento com tag descricao

 for (let i = 0;i < descricao.length;i++){
      descricao[i].innerText = "Div: "+i
 }

 function alterandoClasse(){
    let conteudo = document.getElementById("conteudo")
    conteudo.className = "alterada"
    alert("Teste")

 }

 function adicionandoClasse(){
    let texto = document.getElementById("texto")
    texto.classList.add("vermelho")
 }

 function removendoClasse(){
    let texto = document.getElementById("texto")
    texto.classList.remove("vermelho")

 }