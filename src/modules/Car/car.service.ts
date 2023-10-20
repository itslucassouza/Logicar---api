import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { CarRepository } from 'src/shared/database/repositories/car.repositories copy';

@Injectable()
export class CarService {
    constructor(private readonly carRepo: CarRepository) {}

    async findAllCars() {
      return this.carRepo.findAll();
    }

    async createCar(data: CreateCarDto ) {
      const { parkingId, plate, color, conductorName} = data;

      return this.carRepo.create({
        data: {
          parkingId,
          plate,
          color,
          conductorName
        }
      });
    }

}
