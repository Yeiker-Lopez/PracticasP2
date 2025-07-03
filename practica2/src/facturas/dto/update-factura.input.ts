import { IsUUID } from 'class-validator';
import { CreateFacturaInput } from './create-factura.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateFacturaInput extends PartialType(CreateFacturaInput) {
  //@Field(() => Int)
  //id: number;

  
  @Field(() => ID)
  @IsUUID()
  id: string;


}
