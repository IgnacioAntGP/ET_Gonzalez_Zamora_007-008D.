import { Injectable } from '@angular/core';
import { Users,UserNuevo } from 'src/interfaces/users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient: HttpClient) { }

  getAllUsers():Observable<Users[]>{
    return this.httpclient.get<Users[]>(`${environment.apiUrl}/docente`);
  }

  getByUsername(usuario:any):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/docente/?username=${usuario}`);
  }

  IsLoggedIn(){
    return sessionStorage.getItem('username')!=null;
  }

  postUsuario(newUsuario:UserNuevo):Observable<UserNuevo>{
    return this.httpclient.post<Users>(`${environment.apiUrl}/docente`,newUsuario);
  }

  putUsuario(docente:any):Observable<Users>{
    return this.httpclient.put<Users>(`${environment.apiUrl}/docente/${docente.id}`, docente);
  }



}
