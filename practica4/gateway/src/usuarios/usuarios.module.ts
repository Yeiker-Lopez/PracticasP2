import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { NatsModule } from 'src/transports/nats.module';
import { UsuariosService } from './usuarios.service';

@Module({
  controllers: [UsuariosController],
  imports: [NatsModule],
  providers: [UsuariosService],
})
export class UsuariosModule {}
