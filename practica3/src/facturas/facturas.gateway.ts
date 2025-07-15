import {WebSocketGateway,WebSocketServer,SubscribeMessage,MessageBody,} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { FacturasService } from './facturas.service';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';

@WebSocketGateway({ cors: true })
export class FacturasGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly facturasService: FacturasService) {}

  @SubscribeMessage('createFactura')
  async create(@MessageBody() createFacturaDto: CreateFacturaDto) {
    const nuevaFactura = await this.facturasService.create(createFacturaDto);
    const todasFacturas = await this.facturasService.findAll();
    this.server.emit('facturaCreada', todasFacturas);
    return nuevaFactura;
  }

  @SubscribeMessage('findAllFacturas')
  async findAll() {
    const facturas = await this.facturasService.findAll();
    this.server.emit('facturasListadas', facturas);
    return facturas;
  }

  @SubscribeMessage('updateFactura')
  async update(@MessageBody() data: { id: number; updateFacturaDto: UpdateFacturaDto }) {
    const facturaActualizada = await this.facturasService.update(data.id, data.updateFacturaDto);
    const todasFacturas = await this.facturasService.findAll();
    this.server.emit('facturaActualizada', todasFacturas);
    return facturaActualizada;
  }

  @SubscribeMessage('removeFactura')
  async remove(@MessageBody() id: number) {
    await this.facturasService.remove(id);
    const todasFacturas = await this.facturasService.findAll();
    this.server.emit('facturaEliminada', todasFacturas);
    return { deleted: true };
  }
}