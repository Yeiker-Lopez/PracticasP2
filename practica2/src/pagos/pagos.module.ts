import { Module } from '@nestjs/common';
import { PagosService } from './pagos.service';
import { PagosResolver } from './pagos.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pago } from './entities/pago.entity';

@Module({
  providers: [PagosResolver, PagosService],
  imports: [TypeOrmModule.forFeature([Pago])],
  exports: [TypeOrmModule],
})
export class PagosModule {}
