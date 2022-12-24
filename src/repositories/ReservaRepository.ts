import { AppDataSource } from "../data-source";
import { Reserva } from "../entities/Reserva";


export const ReservaRepository = AppDataSource.getRepository(Reserva);

