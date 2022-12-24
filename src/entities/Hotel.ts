import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IHotel } from "../domain/model/IHotel";
import { Reserva } from "./Reserva";

@Entity('tb_hotel')
export class Hotel implements IHotel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'integer'})
    nome: number;

    @Column({type:'integer'})
    cnpj: number;

    @Column({type:'text'})
    pais: string;

    @Column({type:'text'})
    estado: string;

    @Column({type:'text'})
    cidade: string;

    @OneToMany(() => Reserva, reserva => reserva.hotel)
    reservas: Reserva[]
    
}

