import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FacturasService } from './facturas.service';
import { Factura } from './entities/factura.entity';
import { CreateFacturaInput } from './dto/create-factura.input';
import { UpdateFacturaInput } from './dto/update-factura.input';

@Resolver(() => Factura)
export class FacturasResolver {
  constructor(private readonly facturasService: FacturasService) {}

  @Mutation(() => Factura)
  createFactura(@Args('createFacturaInput') createFacturaInput: CreateFacturaInput):Promise<Factura> {
    return this.facturasService.create(createFacturaInput);
  }

  @Query(() => [Factura], { name: 'facturas' })
  findAll():Promise<Factura[]> {
    return this.facturasService.findAll();
  }

  @Query(() => Factura, { name: 'factura' })
  findOne(@Args('id', { type: () => String }) id: string):Promise<Factura> {
    return this.facturasService.findOne(id); 
  }

  @Mutation(() => Factura)
  updateFactura(@Args('updateFacturaInput') updateFacturaInput: UpdateFacturaInput):Promise<Factura> {
    return this.facturasService.update(updateFacturaInput.id, updateFacturaInput);
  }

  @Mutation(() => Factura)
  removeFactura(@Args('id', { type: () => String }) id: string):Promise<Factura> {
    return this.facturasService.remove(id);
  }
}
