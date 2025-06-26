import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';
import { Repository } from 'typeorm';
import { Factura } from './entities/factura.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FacturasService {
  
  constructor(
    @InjectRepository(Factura)
    private readonly facturaRepository: Repository<Factura>,
  ) 
  { }

  create(createFacturaDto: CreateFacturaDto) {
    const factura = this.facturaRepository.create(createFacturaDto);
    return this.facturaRepository.save(factura);
  }

  findAll() {
    return this.facturaRepository.find();
  }

  findOne(id: number) {
    return this.facturaRepository.findOne({ where: { id } });
  }

  update(id: number, updateFacturaDto: UpdateFacturaDto) {
    const factura = this.facturaRepository.create(updateFacturaDto);
    return this.facturaRepository.update(id, factura)
  }

  async remove(id: number) {
    const factura = await this.findOne(id);
    if (!factura) {
      throw new NotFoundException(`Factura no encontrada`);
    }
    factura.status = false;
    return this.facturaRepository.save(factura);
  }
}