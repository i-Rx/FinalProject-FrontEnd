import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Book } from '../model/Book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://localhost:8111/carRental/books';
 

  constructor(private http: HttpClient) {}

  addBook(book: Book, token: String): Observable<any > {
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${token}`
    // });
    
    return this.http.post(`${this.apiUrl}/add`, book);
  }

  getBook(): Observable<any > {
    return this.http.get(`${this.apiUrl}`);
  }

  getBookByUserId(userId: number, token:string): Observable<any > {
        const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.apiUrl}/${userId}`, {headers});
  }
  // getCarsid(id: string): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/${id}`); 
  // }

}
