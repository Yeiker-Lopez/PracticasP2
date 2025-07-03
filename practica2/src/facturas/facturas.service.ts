import { Injectable } from '@nestjs/common';
import { CreateFacturaInput } from './dto/create-factura.input';
import { UpdateFacturaInput } from './dto/update-factura.input';
import { Repository } from 'typeorm';
import { Factura } from './entities/factura.entity';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class FacturasService {

  constructor(
    @InjectRepository(Factura)
    private readonly facturasRepository: Repository<Factura> 

  ) 
  {
      
    }


    async create(createFacturaInput: CreateFacturaInput):Promise<Factura> {

      const created = this.facturasRepository.create(createFacturaInput);
      return await this.facturasRepository.save(created); 

    }

  async findAll():Promise<Factura[]> {
    return await this.facturasRepository.find();
  }

  async findOne(id: string): Promise<Factura> {
    const factura = await this.facturasRepository.findOneBy({ id });
    if (!factura) {
      throw new Error(`Factura no encontrada`);
    }
    return factura;
  }

  async update(id: string, updateFacturaInput: UpdateFacturaInput):Promise<Factura> {
    const { id: _id, ...rest } = updateFacturaInput;
    const updated = await this.facturasRepository.preload({
      id,
      ...rest,
    });
    if (!updated) {
      throw new Error(`factura no encontrada`);
    }
    return await this.facturasRepository.save(updated);
  }

  async remove(id: string):Promise<Factura> {
    const removed = await this.facturasRepository.findOne({ where: { id } });
    if (!removed) {
      throw new Error(`Factura no encontrada`);
    }
    await this.facturasRepository.remove(removed);
    return {...removed, id};
  }
}
