import { Injectable } from '@nestjs/common';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  private usuarios: Usuario[] = [
    {
      id: 1,
      nombre: 'Juan ',
      apellido: 'Perez',
      email: 'juan@example.com',
      contrasena: 'juan123',
    },
  ];

  create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = {
      id: this.usuarios.length + 1,
      ...createUsuarioDto,
      activo: true,
    };
    this.usuarios.push(usuario);
    return usuario;
  }

  findAll() {
    return this.usuarios;
  }

  findOne(id: number) {
    return this.usuarios.find(usuario => usuario.id === id);
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const index = this.usuarios.findIndex(usuario => usuario.id === id);
    if (index >= 0) {
      this.usuarios[index] = { ...this.usuarios[index], ...updateUsuarioDto };
      return this.usuarios[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.usuarios.findIndex(usuario => usuario.id === id);
    if (index >= 0) {
      const usuario = this.usuarios[index];
      this.usuarios.splice(index, 1);
      return usuario;
    }
    return null;
  }
}