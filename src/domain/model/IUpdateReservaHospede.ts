import { Hospede } from "../../entities/Hospede";

export interface IUpdateReservaHospede {
    idreserva: number;
    idhotel: number;
    numeroReserva: number;
    apartamento: number;
    dataCheckIn: Date;
    dataCheckOut: Date;
    status: number;
    hospedes: Hospede[];
}
