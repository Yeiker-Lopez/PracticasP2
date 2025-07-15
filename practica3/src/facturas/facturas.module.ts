import { Module } from '@nestjs/common';
import { FacturasService } from './facturas.service';
import { FacturasController } from './facturas.controller';
import { Factura } from './entities/factura.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacturasGateway } from './facturas.gateway';

@Module({
  controllers: [FacturasController],
  providers: [FacturasService, FacturasGateway],
  imports: [
    TypeOrmModule.forFeature([Factura]),
  ],
  exports: [TypeOrmModule],
})
export class FacturasModule {}
