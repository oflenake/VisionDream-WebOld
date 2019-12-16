import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserModel } from '../_models';
import { environment } from '../../environments';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Properties
  private apiUrl = environment.apiUrlLc;

  // Constructor
  constructor(private http: HttpClient) { }

  // Method functions
  getAll() {
    return this.http.get<UserModel[]>(`${this.apiUrl}/users`);
  }

  register(user: UserModel) {
    return this.http.post(`${this.apiUrl}/users/register`, user);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }

}
