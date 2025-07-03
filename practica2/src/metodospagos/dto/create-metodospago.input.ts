import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateMetodospagoInput {
  //@Field(() => Int, { description: 'Example field (placeholder)' })
  //exampleField: number;


  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  MetodoPago: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  Descripcion: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  Estado: string;



}
