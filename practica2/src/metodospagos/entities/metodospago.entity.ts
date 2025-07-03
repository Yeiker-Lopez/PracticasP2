import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name: 'metodospagos'})
export class Metodospago {
  
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id:string;

  @Column()
  @Field(() => String)
  MetodoPago:string;

  @Column()
  @Field(() => String)
  Descripcion:string;

  @Column()
  @Field(() => String)
  Estado:string;

}
