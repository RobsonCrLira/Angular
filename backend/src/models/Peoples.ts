import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity("peoples")
class Peoples {

    @PrimaryColumn()
    readonly id!: string;

    @Column()
    nome!: string;

    @Column()
    data_nascimento!: Date;

    @Column()
    endereco!: string;

    @Column()
    cpf!: string;

    @Column()
    fone!: string;

    @Column()
    email!: string;

    @Column()
    obs!: string;

    constructor() {
        if (!this.id) {
            this.id == uuid()
        }
    }

}

export { Peoples }