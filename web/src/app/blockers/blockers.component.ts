import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-blockers',
  templateUrl: './blockers.component.html',
  styleUrls: ['./blockers.component.css']
})
export class BlockersComponent implements OnInit {
  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    this.carService.getBlockers().subscribe(cars => this.cars = cars);
  }
}
