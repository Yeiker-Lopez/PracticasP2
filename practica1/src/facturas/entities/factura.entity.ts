import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("facturas")
export class Factura {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    pago: number;
    
    @Column()
    descripcion: string;
    
    @Column()
    monto_total: number;

    @Column({ default: true })
    status: boolean;
} 

