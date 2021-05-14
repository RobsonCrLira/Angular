import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("pessoas")
class Pessoas {

    @PrimaryColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    data_nascimento: Date;

    @Column()
    endereco: string;

    @Column()
    cpf: string;

    @Column()
    fone: string;

    @Column()
    email: string;

    @Column()
    obs: string;

}

export { Pessoas }