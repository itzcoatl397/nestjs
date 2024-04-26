import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { Brand_SEED } from './data/brands.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {


    constructor(private readonly carsService:CarsService,
        private readonly brandsService:BrandsService
    ){

    }

    populateDb() {

        this.carsService.fillCarsWithSeedData(CARS_SEED);

        this.brandsService.fillBrandsWithSeedData(Brand_SEED);









        return `T`;
    }


}
