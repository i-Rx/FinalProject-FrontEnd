import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = 'http://localhost:8111/carRental/cars';

  constructor(private http: HttpClient) {}

  getCars(): Observable<any > {
    return this.http.get(`${this.apiUrl}`);
  }

  getCarsid(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`); 
  }
}
