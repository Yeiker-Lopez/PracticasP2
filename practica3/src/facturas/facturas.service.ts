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

  async create(createFacturaDto: CreateFacturaDto): Promise<Factura> {
    const factura = this.facturaRepository.create(createFacturaDto);
    return await this.facturaRepository.save(factura);
  }

  async findAll(): Promise<Factura[]> {
    return await this.facturaRepository.find();
  }

  async findOne(id: number): Promise<Factura | null> {
    return await this.facturaRepository.findOne({ where: { id } });
  }
  async update(id: number, updateFacturaDto: UpdateFacturaDto): Promise<Factura> {
    await this.facturaRepository.update(id, updateFacturaDto);
    const factura = await this.findOne(id);
    if (!factura) {
      throw new NotFoundException(`Factura no encontrada`);
    }
    return factura;
  }

  async remove(id: number): Promise<void> { 
    console.log(`[FacturasService] Intentando eliminar permanentemente factura con ID: ${id}`);
    const result = await this.facturaRepository.delete(id); // Use TypeORM's delete method

    if (result.affected === 0) {

      console.warn(`[FacturasService] Factura con ID ${id} no encontrada para eliminar.`);
      throw new NotFoundException(`Factura con ID ${id} no encontrada.`);
    }
    console.log(`[FacturasService] Factura con ID ${id} eliminada exitosamente. Filas afectadas: ${result.affected}`);
  }
}