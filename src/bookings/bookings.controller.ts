import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  createBooking(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingsService.createBooking(createBookingDto);
  }

  @Get()
  findAllBooking() {
    return this.bookingsService.findAllBooking();
  }

  @Get(':id')
  findOneBooking(@Param('id') id: string) {
    return this.bookingsService.findOneBooking(+id);
  }

  @Patch(':id')
  updateBooking(
    @Param('id') id: string,
    @Body() updateBookingDto: UpdateBookingDto,
  ) {
    return this.bookingsService.updateBooking(+id, updateBookingDto);
  }

  @Delete(':id')
  removeBooking(@Param('id') id: string) {
    return this.bookingsService.removeBooking(+id);
  }
}
