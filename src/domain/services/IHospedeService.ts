import { Hospede } from "../../entities/Hospede";
import { ICreateHospede } from "../model/ICreateHospede";

export interface IHospedeService {
    cadastrarHospede({ nome, sobrenome }: ICreateHospede): Promise<Hospede>;
}