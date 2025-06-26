import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateFacturaDto {
    @IsNumber()
    @IsOptional()
    id: number;

    @IsNumber()
    @IsNotEmpty()
    pago: number;

    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @IsNumber()
    @IsNotEmpty()
    monto_total: number;

    @IsOptional()
    status?: boolean; 
}
