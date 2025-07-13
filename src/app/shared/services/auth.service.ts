import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../authentication/interfaces/auth';
import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://cashlife-backend-wbcc.onrender.com/api/v1/authentication';

  constructor(private http: HttpClient) {}

  // Método para registrar un usuario (sign-up)
  registerUser(userDetails: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/sign-up`, userDetails); 
  }

  // Método para iniciar sesión (sign-in)
  loginUser(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/sign-in`, credentials);
  }

  // Obtener usuario por email (si es necesario en otras partes del sistema)
  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  }
}
