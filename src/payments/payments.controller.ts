import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('order/:userId')
  createOrder(
    @Param('userId') userId: string,
    @Body() createOrderDto: CreateOrderDto,
  ) {
    return this.paymentsService.createOrder(userId, createOrderDto);
  }

  @Post('entry/:orderId/:productId')
  createEntry(
    @Param('orderId') orderId: string,
    @Param('productId') productId: string,
    @Body() createEntryDto: CreateEntryDto,
  ) {
    return this.paymentsService.createEntry(
      +orderId,
      +productId,
      createEntryDto,
    );
  }

  @Get('order')
  findAllOrder() {
    return this.paymentsService.findAllOrder();
  }

  @Get('order/:orderId')
  findOneOrder(@Param('orderId') orderId: string) {
    return this.paymentsService.findOneOrder(+orderId);
  }

  @Patch('order/:orderId')
  updateOrder(
    @Param('orderId') orderId: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return this.paymentsService.updateOrder(+orderId, updateOrderDto);
  }

  @Delete('order/:orderId')
  removeOrder(@Param('orderId') orderId: string) {
    return this.paymentsService.removeOrder(+orderId);
  }

  @Patch('entry/:entryId')
  updateEntry(
    @Param('entryId') entryId: string,
    @Body() updateEntryDto: UpdateEntryDto,
  ) {
    return this.paymentsService.updateEntry(+entryId, updateEntryDto);
  }

  @Delete('entry/:entryId')
  removeEntry(@Param('entryId') entryId: string) {
    return this.paymentsService.removeEntry(+entryId);
  }
}
