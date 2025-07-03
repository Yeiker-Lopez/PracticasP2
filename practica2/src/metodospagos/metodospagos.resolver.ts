import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MetodospagosService } from './metodospagos.service';
import { Metodospago } from './entities/metodospago.entity';
import { CreateMetodospagoInput } from './dto/create-metodospago.input';
import { UpdateMetodospagoInput } from './dto/update-metodospago.input';


@Resolver(() => Metodospago)
export class MetodospagosResolver {
  constructor(private readonly metodospagosService: MetodospagosService) {}

  @Mutation(() => Metodospago)
  createMetodospago(@Args('createMetodospagoInput') createMetodospagoInput: CreateMetodospagoInput):Promise<Metodospago> {
    return this.metodospagosService.create(createMetodospagoInput);
  }

  @Query(() => [Metodospago], { name: 'metodospagos' })
  findAll():Promise<Metodospago[]> {
    return this.metodospagosService.findAll();
  }

  @Query(() => Metodospago, { name: 'metodospago' })
  findOne(@Args('id', { type: () => String }) id: string):Promise<Metodospago> {
    return this.metodospagosService.findOne(id); 
  }

  @Mutation(() => Metodospago)
  updateMetodospago(@Args('UpdateMetodospagoInput') UpdateMetodospagoInput: UpdateMetodospagoInput):Promise<Metodospago> {
    return this.metodospagosService.update(UpdateMetodospagoInput.id, UpdateMetodospagoInput);
  }

  @Mutation(() => Metodospago)
  removeMetodospago(@Args('id', { type: () => String }) id: string):Promise<Metodospago> {
    return this.metodospagosService.remove(id);
  }
}











