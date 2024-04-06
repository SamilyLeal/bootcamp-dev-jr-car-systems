import { Component } from '@angular/core';
import { Car } from '../../models/Car';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
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
}
