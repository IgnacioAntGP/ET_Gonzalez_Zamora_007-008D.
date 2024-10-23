import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Justificacion, Justificaciones } from 'src/interfaces/IJustificaciones';
import { Asignaturas, Asignatura } from 'src/interfaces/IAsignaturas';
import { Asistencias } from 'src/interfaces/IAsistencia';


@Injectable({
  providedIn: 'root'
})
export class ApicrudService {

  constructor(private httpClient: HttpClient) { }

  //Bloque service de Justificaciones
  getJustificaciones():Observable<Justificaciones[]>{
    return this.httpClient.get<Justificaciones[]>(`${environment.apiUrl}/justificaciones`);
  }

  postJustificaciones(newJustificacion: Justificacion):Observable<Justificacion>{
    return this.httpClient.post<Justificacion>(`${environment.apiUrl}/justificaciones`, newJustificacion);
  }

  putJustificaciones(justificacion:any):Observable<Justificaciones>{
    return this.httpClient.put<Justificaciones>(`${environment.apiUrl}/justificaciones/${justificacion.id}`, justificacion)
  }

  deleteJustificaciones(justificacion:any):Observable<Justificaciones>{
    return this.httpClient.delete<Justificaciones>(`${environment.apiUrl}/justificaciones/${justificacion.id}`)
  }

  //Bloque service asignatura
  getAsignaturas():Observable<Asignaturas[]>{
    return this.httpClient.get<Asignaturas[]>(`${environment.apiUrl}/asignaturas`);
  }

  putAsignaturas(asignatura:any):Observable<Asignaturas>{
    return this.httpClient.put<Asignaturas>(`${environment.apiUrl}/asignaturas/${asignatura.id}`, asignatura)
  }

  //Bloque service Asistencias
  getAsistencias():Observable<Asistencias[]>{
    return this.httpClient.get<Asistencias[]>(`${environment.apiUrl}/asistencias`);
  }

  postAsistencias(newAsistencia:any):Observable<Asistencias>{
    return this.httpClient.post<Asistencias>(`${environment.apiUrl}/asistencias/`, newAsistencia)
  }

  //Bloque service Imagenes
  getImagenes():Observable<any>{
    return this.httpClient.get((`${environment.apiUrl}/imagen_asignaturas`));
  }
}
