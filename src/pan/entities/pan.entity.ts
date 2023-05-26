import {Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Pan {
@PrimaryGeneratedColumn('uuid')
id: string;

@Column({type: 'text'})
lugar: string;

@Column({type: 'numeric'})
price: number;

@Column({type: 'varchar', nullable: true})
panname: string;

@Column({type: 'text'})
description: string;

@Column({type: 'text'})
tipo: string;

@Column({type: 'text'})
sabor: string;

@Column({type: 'numeric'})
adomicilio: number;


}