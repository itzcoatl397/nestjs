import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
            id: uuid(),
            brand: "Toyota",
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: "Honda",
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: "Jeep",
            model: 'Cherokee'
        },
    ];

    findAll() {
        return this.cars;
    }

    createCar(createCarDto: CreateCarDto) {

        const carsapp: Car =
        {
            id: uuid(),
            brand: createCarDto.brand,
            model: createCarDto.model
        }
        this.cars.push(carsapp)

        return this.cars

    }


    findOneById(id: string) {

        const car = this.cars.find(car => car.id == id)

        if (!car) throw new NotFoundException(`Car with id '${id}' not found`);

        return car;
    }

    update(id: string, updateCarDto: UpdateCarDto) {
        let carDB = this.findOneById(id);
        this.cars = this.cars.map(
            car => {
                if (car.id === id) {

                    carDB = {
                        ...carDB, ...updateCarDto, id

                    }
                    return carDB;

                }
                return car;
            }
        )
        return carDB;
    }

    delete(id: string) {
        let car = this.findOneById(id);

        this.cars = this.cars.filter(car => car.id !== id);
    }


    fillCarsWithSeedData(cars: Car[]) {
        this.cars = cars;

    }


}
