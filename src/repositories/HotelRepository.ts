import { AppDataSource } from "../data-source";
import { Hotel } from "../entities/Hotel";


export const HotelRepository = AppDataSource.getRepository(Hotel);