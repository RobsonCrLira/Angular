import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Peoples } from "../models/Peoples";

class PeopleController {
    async createPeople(request: Request, response: Response) {
        const people = getRepository(Peoples).create(request.body);
        const peopleSave = await getRepository(Peoples).save(people)
        return response.json(peopleSave)
    }
    async updatePeople(request: Request, response: Response) {
        const people = await getRepository(Peoples).findOne(request.params.id);
        if (people) {
            getRepository(Peoples).merge(people, request.body);
            const people = await getRepository(Peoples).find();
            return response.json(people)
        }
        return response.json(people)
    }

    async listPeople(request: Request, response: Response) {
        const people = await getRepository(Peoples).find();
        return response.json(people)
    }

    async getPeople(request: Request, response: Response) {
        const people = await getRepository(Peoples).findOne(request.params.id);
        return response.json(people)
    }

    async deletePeople(request: Request, response: Response) {
        const people = await getRepository(Peoples).delete(request.params.id);
        return response.json(people)
    }
}

export { PeopleController };