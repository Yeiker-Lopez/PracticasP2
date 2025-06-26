import { Module } from '@nestjs/common';
import { MetodospagosService } from './metodospagos.service';
import { MetodospagosController } from './metodospagos.controller';
import { Metodospago } from './entities/metodospago.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [MetodospagosController],
  providers: [MetodospagosService],
  imports: [
    TypeOrmModule.forFeature([Metodospago]), 
  ],
  exports: [TypeOrmModule],
})
export class MetodospagosModule {}
