import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from './car';
import { CARS } from './mock-cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getBlockers(): Observable<Car[]> {
    return of(CARS.slice(0, 2));
  }

  getBlockees(): Observable<Car[]> {
    return of(CARS.slice(2, 4));
  }

  getCars(): Observable<Car[]> {
    return of(CARS.slice(4, 6));
  }
}
