import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Book } from '../model/Book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://localhost:8111/books/add';

  constructor(private http: HttpClient) {}

  addBook(book: Book, token: String): Observable<any > {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    
    return this.http.post(`${this.apiUrl}`, book, {headers});
  }

  getBook(): Observable<any > {
    return this.http.get(`${this.apiUrl}`);
  }



}