import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePagoDto {
    @IsNumber()
    @IsOptional()
    id: number;

    @IsNumber()
    @IsNotEmpty()
    monto: number;

    @IsString()
    @IsNotEmpty()
    fecha: string;
    
    @IsOptional()
    eatado?: boolean; 
}
