import { Component } from '@angular/core';
import { Book } from 'src/app/model/Book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  book : Book []= []

  constructor(private bookService : BookService) {}


  ngOnInit(): void {
    this.getBooks();
  }
  getBooks() {
    this.bookService.getBook().subscribe((data) => {
      this.book = data;
    });
}

}
