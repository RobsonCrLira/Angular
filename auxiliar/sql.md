# Pessoas
```sql
create table pessoas (
 id serial PRIMARY KEY,
 nome varchar (40) NOT NULL, 
 data_nascimento date NOT NULL, 
 endereço varchar(50) NOT NULL, 
 cpf varchar(11) NOT NULL unique,
 fone varchar(14),
 email varchar(30),
 obs text
)
```