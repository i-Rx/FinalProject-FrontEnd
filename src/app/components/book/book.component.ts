import { Component } from '@angular/core';
import { Book } from 'src/app/model/Book.model';
import { Car } from 'src/app/model/Car.model';
import { BookService } from 'src/app/services/book.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  books : Book []= []
  // car! : Car;
  // id: any;

  constructor(private bookService : BookService , private carService : CarService,) {}


  ngOnInit(): void {
    this.getBooks();
    // this.getCarsid(this.id);
  }
  getBooks() {
    this.bookService.getBook().subscribe((data) => {
      this.books = data;
    });
}

// getCarsid(id: string){
//   return this.carService.getCarsid(id).subscribe(
//     cars => {
//       this.car = cars
    
//     }
//   )
// }
}