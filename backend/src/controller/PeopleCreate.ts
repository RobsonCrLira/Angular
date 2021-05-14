import { Request, Response } from "express";

class PeopleCreate {
    async execute(request: Request, response: Response) {

        return response.status(200).json({ "ok": "tudo certo" })
    }
}

export { PeopleCreate };