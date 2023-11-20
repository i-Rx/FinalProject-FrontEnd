import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8111/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any > {
    return this.http.get(`${this.apiUrl}`);
  }
  updateUserById(id: number, user: any): Observable<any>{
    return this.http.put(`${this.apiUrl}/users/update/${id}`, user)
  }
}
