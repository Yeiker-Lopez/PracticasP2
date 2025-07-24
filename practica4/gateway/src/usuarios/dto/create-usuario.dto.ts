import { IsEmail, IsString } from 'class-validator';

export class CreateUsuarioDto {
    @IsString()
    nombre: string;

    @IsString()
    apellido: string;

    @IsEmail()
    email: string;

    @IsString()
    contrasena: string;
}
