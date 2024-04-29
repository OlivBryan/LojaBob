create database bob;
use bob;

create table usuario(
    id int auto_incriment not null,
    login varchar(120) null,
    senha varchar(120) null,
    email varchar(120) null,
    primary key(id)
)