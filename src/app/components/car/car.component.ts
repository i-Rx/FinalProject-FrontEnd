import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Car } from 'src/app/model/Car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent {
Cars: Car[] = []

constructor(private carService : CarService) {}


   ngOnInit(): void {
    this.getCars();
  }
  getCars() {
    this.carService.getCars().subscribe((data) => {
      this.Cars = data;
    });
}
}
