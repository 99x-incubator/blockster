import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car';

@Component({
  selector: 'app-blockees',
  templateUrl: './blockees.component.html',
  styleUrls: ['./blockees.component.css']
})
export class BlockeesComponent implements OnInit {
  blockees: Car[];
  cars: Car[];
  selected: Car;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.getBlockees();
    this.getCars();
  }

  getBlockees(): void {
    this.carService.getBlockees().subscribe(blockees => this.blockees = blockees);
  }

  getCars(): void {
    this.carService.getCars().subscribe(cars => {
      this.cars = cars;
      this.selected = this.cars[0];
    });
  }

  onSubmit() {
    const index = this.cars.indexOf(this.selected);
    this.cars = [...this.cars.slice(0, index), ...this.cars.slice(index + 1)];
    this.blockees.push(this.selected);

    this.selected = this.cars[0];
  }
}
