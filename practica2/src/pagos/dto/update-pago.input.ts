import { IsUUID } from 'class-validator';
import { CreatePagoInput } from './create-pago.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdatePagoInput extends PartialType(CreatePagoInput) {
  //@Field(() => Int)
  //id: number;

  
  @Field(() => ID)
  @IsUUID()
  id: string;


}
