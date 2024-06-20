
// CRIANDO UMA BASE DE DADOS



create database loja_parafusos;
use loja_parafusos;

create table parafusos(
id_parafuso int primary key auto_increment,
nome varchar(45)
);

-- Iniciando o CRUD-- 
-- INSERT é o create-- 

insert into parafusos (nome) values
("estrela"),
("frânces"),
("máquina")
;

-- SELECT READ--  
select * from parafusos;

-- Update é update --  
update parafusos set nome= "fenda" where id_parafuso = 1;

-- DELETE é delete-- 
delete from parafusos where id_parafuso=1;