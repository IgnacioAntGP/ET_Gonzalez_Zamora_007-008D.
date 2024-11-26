import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users, UserNuevo } from 'src/interfaces/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient: HttpClient ) { }

  getAllUsers():Observable<Users[]>{
    return this.httpclient.get<Users[]>(`${environment.apiUrl}/usuarios`);
  }

  getByUsername(usuario:any):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios/?username=${usuario}`);
  }

  IsLoggedIn(){
    return sessionStorage.getItem('username')!=null;
  }

  postUsuario(newUsuario:UserNuevo): Observable<UserNuevo>{
    return this.httpclient.post<Users>(`${environment.apiUrl}/usuarios`, newUsuario);
  }

  putUsuario(alumno:any):Observable<Users>{
    return this.httpclient.put<Users>(`${environment.apiUrl}/usuarios/${alumno.id}`, alumno);
  }
  login(userData: any){
    sessionStorage.setItem('userData', JSON.stringify(userData));
  }
}
