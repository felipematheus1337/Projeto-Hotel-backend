import { ICreateHotel } from "../domain/model/ICreateHotel";
import { IUpdateHotel } from "../domain/model/IUpdateHotel";
import { IHotelService } from "../domain/services/IHotelService";
import { Hotel } from "../entities/Hotel";
import AppError from "../errors/AppError";
import { HotelRepository } from "../repositories/HotelRepository";



class HotelService  implements IHotelService{

    public async list():Promise<Hotel[]> {
        const hoteis = await HotelRepository.find({});

        return hoteis;
    }

    public async create({nome,cnpj,cidade,pais,estado} : ICreateHotel): Promise<Hotel> {
        const hotel = HotelRepository.create({
            nome:Number(nome),
            cnpj:Number(cnpj),
            cidade,
            pais,
            estado
        });


        await HotelRepository.save(hotel);

        return hotel;
    }

    public async update({id,nome,cnpj,cidade,pais,estado }: IUpdateHotel): Promise<void> {
        const hotelExists = await HotelRepository.findOneBy({ id });
        
        if (!hotelExists) {
            throw new AppError(`Hotel não encontrado com o ID: ${id}`, 404);
        }

        hotelExists.nome = nome;
        hotelExists.cnpj = cnpj;
        hotelExists.cidade = cidade;
        hotelExists.pais = pais;
        hotelExists.estado = estado;

        await HotelRepository.save(hotelExists);

    }



}




export default new HotelService();