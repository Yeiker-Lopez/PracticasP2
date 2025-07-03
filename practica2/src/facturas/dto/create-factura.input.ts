import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateFacturaInput {
  //@Field(() => Int, { description: 'Example field (placeholder)' })
  //exampleField: number;


  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  Pago: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  Descripcion: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  Monto_Total: string;

}
