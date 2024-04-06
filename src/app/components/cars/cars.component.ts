import { Component } from '@angular/core';
import { Car } from '../../models/Car';
import { CommonModule } from '@angular/common';
import { CarComponent } from '../car/car.component';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule, CarComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  count = 5;
  car: Car = {} as Car;
  isUpdated = false;

  cars: Car[] = [
    {
      id: 1,
      model: "corolla",
      make: "toyota",
      price: 37000,
      year: 2007
    },
    {
      id: 2,
      model: "lancer",
      make: "mitsubishi",
      price: 49900,
      year: 2014
    },
    {
      id: 3,
      model: "lancer",
      make: "mitsubishi",
      price: 49900,
      year: 2014
    },
    {
      id: 4,
      model: "lancer",
      make: "mitsubishi",
      price: 49900,
      year: 2014
    }
  ];

  save(){
    if(!this.isUpdated){
      this.car.id = this.count;
      this.count++;
      this.cars.push(this.car);
    }

    this.car = {} as Car;
    this.isUpdated = false;
  }

  update(currentCar: Car){
    this.car = currentCar;
    this.isUpdated = true;
  }

  remove(removeCar: Car){
    this.cars = this.cars.filter(c => c !== removeCar);
  }
}
