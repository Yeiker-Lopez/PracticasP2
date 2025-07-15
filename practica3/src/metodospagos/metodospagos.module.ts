import { Module } from '@nestjs/common';
import { MetodospagosService } from './metodospagos.service';
import { MetodospagosController } from './metodospagos.controller';
import { Metodospago } from './entities/metodospago.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetodospagosGateway } from './metodospagos.gateway';

@Module({
  controllers: [MetodospagosController],
  providers: [MetodospagosService, MetodospagosGateway],
  imports: [
    TypeOrmModule.forFeature([Metodospago]), 
  ],
  exports: [TypeOrmModule],
})
export class MetodospagosModule {}
