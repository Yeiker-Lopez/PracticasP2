import { Module } from '@nestjs/common';
import { MetodospagosService } from './metodospagos.service';
import { MetodospagosResolver } from './metodospagos.resolver';
import { Metodospago } from './entities/metodospago.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [MetodospagosResolver, MetodospagosService],
  imports: [TypeOrmModule.forFeature([Metodospago])],
  exports: [TypeOrmModule],
})
export class MetodospagosModule {}
