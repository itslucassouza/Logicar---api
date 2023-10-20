import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get() 
  findAll() {
    return this.carService.findAllCars()
  }

  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this.carService.createCar(createCarDto);
  }
}
