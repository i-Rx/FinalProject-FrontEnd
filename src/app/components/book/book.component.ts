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
  id: any;
  token: any;
  constructor(private bookService : BookService , private carService : CarService,) {}


  ngOnInit(): void {
    this.id = this.getUserIdFromLocalStorage();
    this.token = this.getToken();
    this.getBooksByUserId(this.id, this.token);
  }
  getBooksByUserId(userId: number, token:string) {
    this.bookService.getBookByUserId(userId, token).subscribe((data) => {
      this.books = data;
    });
}

getToken(){
  const tokenStorage = localStorage.getItem('Token');


  return tokenStorage;
}

  getUserIdFromLocalStorage(){
    const currentUserString = localStorage.getItem('currentUser');
    let userId = 0;
    if(currentUserString){
      const currentUser = JSON.parse(currentUserString);
      userId = currentUser.id;
    }
    return userId;
  }

  
  deleteBook(userId: string) {
   return this.bookService.deleteBookid(userId).subscribe({
    next: (book) => {
      this.books = [book]
      console.log(book)
      console.log('Successfully deleted.');
    },
    error: (error) => {
      console.error('Error deleting:', error);
    
    }
  });
}
}