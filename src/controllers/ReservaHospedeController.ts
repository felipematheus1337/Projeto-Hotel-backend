import { Request, Response } from "express";
import ReservaService from "../services/ReservaService";

export default class ReservaHospedeController {
    
    public async buscarReservaHospede(request: Request, response: Response): Promise<Response> {
        const reservaHospedes = await ReservaService.list();

        return response.json(reservaHospedes);
    }


    public async cadastrarReservaHospede(request: Request, response: Response): Promise<Response> {
        const { idhotel, numeroreserva: numeroReserva,
            apartamento, datacheckin: dataCheckIn,
            datacheckout: dataCheckOut, status, hospedes } = request.body
        
        const reservaHospede = await ReservaService.create({ idhotel, numeroReserva, apartamento, dataCheckIn, dataCheckOut, status, hospedes });

        return response.json(reservaHospede);
        
    }

    public async updateReservaHospede(request: Request, response: Response): Promise<Response> {
        const { idhotel, numeroreserva: numeroReserva,
            apartamento, datacheckin: dataCheckIn,
            datacheckout: dataCheckOut, status, hospedes } = request.body
        
        const { idreserva } = request.params;
        
        const reservaHospede = await ReservaService.update({
            idreserva: Number(idreserva),
            idhotel, numeroReserva,
            apartamento, dataCheckIn,
            dataCheckOut, status, hospedes
        });

        return response.json(reservaHospede);
        
    }
}

