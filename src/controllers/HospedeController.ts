import { Request, Response } from "express";
import HospedeService from "../services/HospedeService";
import AppError from "../errors/AppError";


export default class HospedeController {

    public async createHospede(request: Request, response: Response): Promise<Response> {
        const { nome, sobrenome } = request.body;
        console.log(nome, sobrenome);
        const hospede = await HospedeService.cadastrarHospede({ nome, sobrenome });
        console.log(hospede);

        if (!hospede) {
            throw new AppError("Falha ao criar hospede", 500);
        }

        return response.json(hospede);

    }

    public async listarHospedes(request: Request, response: Response): Promise<Response> {
        const hospede = await HospedeService.listarHospede();

        return response.json(hospede);
    }
}




