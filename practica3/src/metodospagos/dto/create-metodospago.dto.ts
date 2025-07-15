import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMetodospagoDto {

    @IsString()
    @IsNotEmpty()
    codigo: string;

    @IsString()
    @IsNotEmpty()
    metodo_pago: string;

    @IsString()
    @IsNotEmpty()
    descripcion: string;


    @IsOptional()
    estado?: boolean; 
}