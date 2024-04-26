import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {


  populateDb() {
    return `This action returns all seed`;
  }


}
