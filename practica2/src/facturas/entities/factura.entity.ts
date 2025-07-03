import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name: 'facturas'})
export class Factura {
  
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id:string;

  @Column()
  @Field(() => String)
  Pago:string;

  @Column()
  @Field(() => String)
  Descripcion:string;

  @Column()
  @Field(() => String)
  Monto_Total:string;

}
