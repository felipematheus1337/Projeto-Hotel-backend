import { Hospede } from "../../entities/Hospede";

export interface ICreateReservaHospede {
    idhotel: number;
    numeroReserva: number;
    apartamento: number;
    dataCheckIn: Date;
    dataCheckOut: Date;
    status: number;
    hospedes: Hospede[];
}
