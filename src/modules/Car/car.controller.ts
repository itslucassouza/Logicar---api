import { Body, Controller, Post } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}


  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this.carService.createCar(createCarDto);
  }
}
