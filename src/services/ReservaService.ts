import { ICreateReservaHospede } from "../domain/model/ICreateReservaHospede";
import { IUpdateReservaHospede } from "../domain/model/IUpdateReservaHospede";
import { Hospede } from "../entities/Hospede";
import { Hotel } from "../entities/Hotel";
import { Reserva } from "../entities/Reserva";
import AppError from "../errors/AppError";
import { HospedeRepository } from "../repositories/HospedeRepository";
import { HotelRepository } from "../repositories/HotelRepository";
import { ReservaRepository } from "../repositories/ReservaRepository";


class ReservaService{

    public async list():Promise<Reserva[]> {
        const reservaHospede = await ReservaRepository.find({
            relations: {
                hospedes: true,
                hotel:true,
        }});

        return reservaHospede;
    }


    public async create({ idhotel, apartamento, dataCheckIn, dataCheckOut, hospedes, numeroReserva, status }: ICreateReservaHospede): Promise<Reserva> {
        console.log(idhotel, apartamento, dataCheckIn, dataCheckOut, hospedes, numeroReserva, status);
        const hotelExists = await HotelRepository.findOneBy({ id: Number(idhotel) });

        if (!hotelExists) {
            throw new AppError("Hotel não existe!", 400);
        }

        const reservaHospede =  ReservaRepository.create({
            numeroreserva: Number(numeroReserva),
            apartamento:Number(apartamento),
            dataCheckIn,
            dataCheckOut,
            hospedes: hospedes,
            status,
            hotel: hotelExists
        });

        await ReservaRepository.save(reservaHospede);

        return reservaHospede;
        
       
    }
    

    public async update({ idreserva, idhotel, apartamento, dataCheckIn, dataCheckOut, hospedes, numeroReserva, status }: IUpdateReservaHospede): Promise<Reserva> {
        const reservaExists = await ReservaRepository.findOneBy({ id: Number(idreserva) });

        if (!reservaExists) {
            throw new AppError("Reserva não encontrada!");
        }


        const hotelExists = await HotelRepository.findOneBy({ id: Number(idhotel) });

        if (!hotelExists) {
            throw new AppError("Hotel não existe!", 400);
        }


        reservaExists.apartamento = apartamento;
        reservaExists.dataCheckIn = dataCheckIn;
        reservaExists.dataCheckOut = dataCheckOut;
        reservaExists.hospedes = hospedes;
        reservaExists.hotel = hotelExists;
        reservaExists.numeroreserva = numeroReserva;
        reservaExists.status = status;

        await ReservaRepository.save(reservaExists);

        return reservaExists;
        
       
    }
    

    public async hospedesWhoExists(arrHospede: Hospede[]): Promise<Hospede[]> {
        let hospedesWhoExist: Hospede[] = [];

        try {
         arrHospede.forEach(async hospede => {
            let exist = await HospedeRepository.findOneBy({ id: hospede.id })
            console.log(hospede)
            if (exist) {
                hospedesWhoExist.push(hospede);
            }
        }) 
        } catch (e) {
            console.log("..", e);
        }
        

        return hospedesWhoExist;
    }

    


}




export default new ReservaService();