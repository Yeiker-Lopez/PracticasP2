import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { PagosService } from './pagos.service';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';

@WebSocketGateway({ cors: true })
export class PagosGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly pagosService: PagosService) {}

  @SubscribeMessage('createPago')
  async create(@MessageBody() createPagoDto: CreatePagoDto) {
    const nuevoPago = await this.pagosService.create(createPagoDto);
    const todosPagos = await this.pagosService.findAll();
    this.server.emit('pagoCreado', todosPagos);
    return nuevoPago;
  }

  @SubscribeMessage('findAllPagos')
  async findAll() {
    const pagos = await this.pagosService.findAll();
    this.server.emit('pagosListados', pagos);
    return pagos;
  }

  @SubscribeMessage('findOnePago')
  async findOne(@MessageBody() id: number) {
    const pago = await this.pagosService.findOne(id);
    this.server.emit('pagoEncontrado', pago);
    return pago;
  }

  @SubscribeMessage('updatePago')
  async update(@MessageBody() data: { id: number; updatePagoDto: UpdatePagoDto }) {
    const pagoActualizado = await this.pagosService.update(data.id, data.updatePagoDto);
    const todosPagos = await this.pagosService.findAll();
    this.server.emit('pagoActualizado', todosPagos);
    return pagoActualizado;
  }

  @SubscribeMessage('removePago')
  async remove(@MessageBody() id: number) {
    const pagoEliminado = await this.pagosService.remove(id);
    const todosPagos = await this.pagosService.findAll();
    this.server.emit('pagoEliminado', todosPagos);
    return pagoEliminado;
  }
}