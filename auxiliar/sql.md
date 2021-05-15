# Pessoas
```sql
create table pessoas (
 id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
 nome varchar (40) NOT NULL, 
 cpf varchar(11) NOT NULL unique,
 data_nascimento date NOT NULL, 
 endereco varchar(50) NOT NULL, 
 fone varchar(14),
 email varchar(30),
 obs text
)
```