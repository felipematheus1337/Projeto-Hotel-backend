import { ICreateHospede } from "../domain/model/ICreateHospede";
import { IHospedeService } from "../domain/services/IHospedeService";
import { Hospede } from "../entities/Hospede";
import { HospedeRepository } from "../repositories/HospedeRepository";


class HospedeService implements IHospedeService{


    public async listarHospede(): Promise<Hospede[]> {
        const hospedes = await HospedeRepository.find({});

        return hospedes;
    }




    public async cadastrarHospede({ nome, sobrenome }: ICreateHospede): Promise<Hospede> {
        console.log(nome, sobrenome);
        const hospede = HospedeRepository.create({
            nome,
            sobrenome
        });

        await HospedeRepository.save(hospede);

        return hospede;
    }

    
}



export default new HospedeService();