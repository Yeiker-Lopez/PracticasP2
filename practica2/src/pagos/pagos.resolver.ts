import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PagosService } from './pagos.service';
import { Pago } from './entities/pago.entity';
import { CreatePagoInput } from './dto/create-pago.input';
import { UpdatePagoInput } from './dto/update-pago.input';

@Resolver(() => Pago)
export class PagosResolver {
  constructor(private readonly pagosService: PagosService) {}

  @Mutation(() => Pago)
  createPago(@Args('createPagoInput') createPagoInput: CreatePagoInput):Promise<Pago> {
    return this.pagosService.create(createPagoInput);
  }

  @Query(() => [Pago], { name: 'pagos' })
  findAll():Promise<Pago[]> {
    return this.pagosService.findAll();
  }

  @Query(() => Pago, { name: 'pago' })
  findOne(@Args('id', { type: () => String }) id: string):Promise<Pago> {
    return this.pagosService.findOne(id); 
  }

  @Mutation(() => Pago)
  updatePago(@Args('updatePagoInput') updatePagoInput: UpdatePagoInput):Promise<Pago> {
    return this.pagosService.update(updatePagoInput.id, updatePagoInput);
  }

  @Mutation(() => Pago)
  removePago(@Args('id', { type: () => String }) id: string):Promise<Pago> {
    return this.pagosService.remove(id);
  }
}
