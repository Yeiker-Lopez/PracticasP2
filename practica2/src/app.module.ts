import { Module } from '@nestjs/common';
import { FacturasModule } from './facturas/facturas.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MetodospagosModule } from './metodospagos/metodospagos.module';
import { PagosModule } from './pagos/pagos.module';


@Module({
  imports: [FacturasModule,MetodospagosModule,PagosModule,
      GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),

    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.DATABASE ?? 'sqlite.prueba',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
