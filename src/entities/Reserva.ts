import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IReserva } from "../domain/model/IReserva";
import { Hotel } from "./Hotel";
import { Hospede } from "./Hospede";


@Entity('tb_reservas')
export class Reserva implements IReserva {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'integer'})
    numeroreserva: number;

    @Column({type:'integer'})
    apartamento: number;

    @Column({type:'date'})
    dataCheckIn: Date;

    @Column({type:'date'})
    dataCheckOut: Date;

    @Column({type:'integer'})
    status: number;

    @ManyToOne(() => Hotel, hotel => hotel.reservas)
    @JoinColumn({name: 'idhotel'})
    hotel: Hotel;

    @OneToMany(() => Hospede, hospede => hospede.reserva)
    hospedes: Hospede[];

}