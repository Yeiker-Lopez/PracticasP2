import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("pagos")
export class Pago {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    monto: number;
    
    @Column()
    fecha: string;

    @Column({ default: true })
    estado: boolean;
} 

