import { Component } from '@angular/core';
import { Car } from '../../models/Car';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  car: Car = {} as Car;
}
