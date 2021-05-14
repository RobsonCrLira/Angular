import { EntityRepository, Repository } from "typeorm";
import { Pessoas } from "../model/Pessoas";

@EntityRepository(Pessoas)
class PessoasRepository extends Repository<Pessoas>{ }

export { PessoasRepository }