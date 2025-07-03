import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name: 'pagos'})
export class Pago {
  
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id:string;

  @Column()
  @Field(() => String)
  Fecha:string;

  @Column()
  @Field(() => String)
  Estado:string;

  @Column()
  @Field(() => String)
  Monto:string;

}
