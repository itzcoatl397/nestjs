import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return [{
      name:"Gerardo",
      edad:21
    }];
  }
}
