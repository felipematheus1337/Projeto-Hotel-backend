import { Request, Response } from "express";
import HotelService from "../services/HotelService";
import AppError from "../errors/AppError";




export default class HotelController {
    
    public async buscarHotel(request: Request,response: Response):Promise<Response> {
        const hoteis = await HotelService.list();

        if (!hoteis) {
            throw new AppError("Hoteis não encontrados", 404);
        }

        return response.json(hoteis);
    }

    public async cadastrarHotel(request: Request, response: Response): Promise<Response> {
        const { nome, cnpj, pais, estado, cidade } = request.body;

        const hotel = await HotelService.create({ nome, cnpj, pais, estado, cidade })
        
        if (!hotel) {
            throw new AppError("Falha ao criar hotel!", 400);
        }

        return response.json(hotel.id);
    }

    public async atualizarHotel(request: Request, response: Response): Promise<Response> {
        const { id, nome, cnpj, pais, estado, cidade } = request.body;

        await HotelService.update({ id, nome, cnpj, pais, estado, cidade });

        return response.json();
    }

}
