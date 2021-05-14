import { Router } from 'express';
import { PeopleCreate } from './controller/PeopleCreate';

const router = Router()
const peoplecreate = new PeopleCreate()

router.get("/", peoplecreate.execute);


export { router }