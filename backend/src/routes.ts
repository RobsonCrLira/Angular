import { Router } from 'express';
import { PeopleController } from './controller/PeopleCreate';


const router = Router()
const peopleCRUD = new PeopleController()

router.post("/", peopleCRUD.createPeople);
router.post("/:id", peopleCRUD.updatePeople);
router.post("/:id", peopleCRUD.deletePeople);
router.post("/:id", peopleCRUD.getPeople);
router.post("/", peopleCRUD.listPeople);


export { router }