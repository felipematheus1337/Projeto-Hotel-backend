import { Hotel } from "../../entities/Hotel";
import { ICreateHotel } from "../model/ICreateHotel";
import { IUpdateHotel } from "../model/IUpdateHotel";


export interface IHotelService {
    list(): Promise<Hotel[]>
    create({ nome, cnpj, cidade, pais, estado }: ICreateHotel): Promise<Hotel>
    update({id,nome,cnpj,cidade,pais,estado }: IUpdateHotel): Promise<void>
    
}