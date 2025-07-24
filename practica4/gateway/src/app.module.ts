import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { NatsModule } from './transports/nats.module';

@Module({
  imports: [UsuariosModule, NatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
