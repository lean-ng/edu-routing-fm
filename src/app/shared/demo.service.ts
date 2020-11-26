import { Injectable } from '@angular/core';

@Injectable()
export class DemoService {

  constructor(name: string) {
    console.log('Shared DemoService: ', name);
  }
}
