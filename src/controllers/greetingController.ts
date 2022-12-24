import e, { Request, Response } from "express";


class GreetingController {

    async index(request: Request,response: Response): Promise<Response> {
        return response.json("Hello!");
    }

}


export default new GreetingController();