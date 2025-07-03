import { IsUUID } from 'class-validator';
import { CreateMetodospagoInput } from './create-metodospago.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateMetodospagoInput extends PartialType(CreateMetodospagoInput) {

  @Field(() => ID)
  @IsUUID()
  id: string;
}
