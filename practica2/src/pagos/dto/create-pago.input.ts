import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreatePagoInput {
  //@Field(() => Int, { description: 'Example field (placeholder)' })
  //exampleField: number;


  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  Fecha: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  Estado: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  Monto: string;



}
