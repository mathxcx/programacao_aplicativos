//Começando projeto novo

git init 

//Como clonar um repositório

git clone: https://github.com/mathxcx/programacao_aplicativos.git

// Configurando

git config user.email "exemplo@gmail.com"
git config user.name "Matheus Sarti Brunelli"

//Selecionando a branch

git branch -M main
git remote add origin https://github.com/mathxcx/programacao_aplicativos.git

//Adicionando arquivos

git add .

//Colocando comentário do commit "commitar"

git commit -m "O que foi realizado"

//Subindo alterações

git push -u origin main




/// IMSONIA

CREATE - json

http://localhost:5000/parafusos

READ 

http://localhost:5000/parafusos

UPDATE - json

http://localhost:5000/parafusos/0

DELETE - json 

http://localhost:5000/parafusos/3 => número 3 quer dizer qual id vc quer apagar
