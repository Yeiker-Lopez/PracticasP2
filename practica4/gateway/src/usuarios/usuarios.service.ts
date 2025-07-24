import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @Inject('NATS_SERVICE') private readonly natsClient: ClientProxy,
  ) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    return this.natsClient.send('createUsuario', createUsuarioDto);
  }

  findAll() {
    return this.natsClient.send('findAllUsuarios', {});
  }

  findOne(id: number) {
    return this.natsClient.send('findOneUsuario', id);
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.natsClient.send('updateUsuario', { id, updateUsuarioDto });
  }

  remove(id: number) {
    return this.natsClient.send('removeUsuario', id);
  }
}