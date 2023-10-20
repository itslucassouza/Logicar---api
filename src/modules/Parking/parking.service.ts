import { Injectable } from '@nestjs/common';
import { ParkingRepository } from 'src/shared/database/repositories/parking.repositories';
import { CreateParkingDto } from './dto/create-parking.dto';

@Injectable()
export class ParkingService {
    constructor(private readonly parkingRepo: ParkingRepository) {}

    async createParking(data: CreateParkingDto ) {
      const { cash, parkingName, userId} = data;

      return this.parkingRepo.create({
        data: {
          cash,
          parkingName,
          userId
        }
      });
    }

}
