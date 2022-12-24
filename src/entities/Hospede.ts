import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IHospede } from "../domain/model/IHospede";
import { Reserva } from "./Reserva";



@Entity('tb_hospedes')
export class Hospede implements IHospede {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'text'})
    nome: string;

    @Column({type:'text'})
    sobrenome: string;



    @ManyToOne(() => Reserva, reserva => reserva.hospedes)
    @JoinColumn({name: 'idhospede'})    
    reserva: Reserva;
    
}