import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePagoDto {
    @IsNumber()
    @IsNotEmpty()
    monto: number;

    @IsString()
    @IsNotEmpty()
    fecha: string;
    
    @IsOptional()
    estado?: boolean; 
}
