import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("metodospago")
export class Metodospago {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    codigo: string;
    
    @Column()
    metodo_pago: string;
    
    @Column()
    descripcion: string;

    @Column({ default: true })
    estado: boolean;
}

