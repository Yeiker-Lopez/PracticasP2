import { Module } from '@nestjs/common';
import { FacturasService } from './facturas.service';
import { FacturasResolver } from './facturas.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Factura } from './entities/factura.entity';

@Module({
  providers: [FacturasResolver, FacturasService],
  imports: [TypeOrmModule.forFeature([Factura])],
  exports: [TypeOrmModule],
})
export class FacturasModule {}
