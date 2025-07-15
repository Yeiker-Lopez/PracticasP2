import { Module } from '@nestjs/common';
import { FacturasModule } from './facturas/facturas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetodospagosModule } from './metodospagos/metodospagos.module';
import { PagosModule } from './pagos/pagos.module';


@Module({
  imports: [FacturasModule,MetodospagosModule,PagosModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'sqlite.db',
      synchronize: true,
      autoLoadEntities: true,
      }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
