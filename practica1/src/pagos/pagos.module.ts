import { Module } from '@nestjs/common';
import { PagosService } from './pagos.service';
import { PagosController } from './pagos.controller';
import { Pago } from './entities/pago.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [PagosController],
  providers: [PagosService],
  imports: [
    TypeOrmModule.forFeature([Pago]),
  ],
  exports: [TypeOrmModule]
})
export class PagosModule {}
