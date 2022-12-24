import { AppDataSource } from "../data-source";
import { Hospede } from "../entities/Hospede";


export const HospedeRepository = AppDataSource.getRepository(Hospede);