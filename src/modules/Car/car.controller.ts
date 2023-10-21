import { Body, Controller, Put, Get, Post, Param } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get() 
  findAll() {
    return this.carService.findAllCars()
  }

  @Put('/update-car/:plate') 
  updateCar(@Param('plate') plate: string) {
    return this.carService.updateCar(plate)
  }

  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this.carService.createCar(createCarDto);
  }
}
