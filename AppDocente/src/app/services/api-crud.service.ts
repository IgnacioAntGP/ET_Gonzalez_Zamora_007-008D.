import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Justificaciones } from 'src/interfaces/IJustificaciones';
import { cursos } from 'src/interfaces/ICursos';
import { Alumnos } from 'src/interfaces/IAlumno';
import { Asistencia } from 'src/interfaces/IAsistencia';
import { Asignaturas } from 'src/interfaces/IAsignatura';


@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  constructor(private httpClient: HttpClient) { }

  //service justificaciones
  getJustificaciones():Observable<Justificaciones[]>{
    return this.httpClient.get<Justificaciones[]>(`${environment.apiUrl}/justificaciones`);
  }

  putJustificacion(justificacion:any):Observable<Justificaciones>{
    return this.httpClient.put<Justificaciones>(`${environment.apiUrl}/justificaciones/${justificacion.id}`, justificacion)
  }

  //service curso
  getCursos():Observable<cursos[]>{
    return this.httpClient.get<cursos[]>(`${environment.apiUrl}/cursos`);
  }

  getCursoById(idCurso:any):Observable<cursos>{
    return this.httpClient.get<cursos>(`${environment.apiUrl}/cursos/?idCurso=${idCurso}`);
  }

  //Service lista curso
  getAlumnos():Observable<Alumnos>{
    return this.httpClient.get<Alumnos>(`${environment.apiUrl}/usuarios`)
  }

  getAsistenciaByParams(rut_alumno:any, id_curso:any, asignatura:any, docente:any):Observable<Asistencia>{
    let params = new HttpParams().set('id_curso', id_curso).set('rut_alumno', rut_alumno).set('asignatura', asignatura).set('docente', docente);
    return this.httpClient.get<Asistencia>(`${environment.apiUrl}/asistencias/`, { params });
  }

  //Service camara

  postAsistencia(newAsistencia:any):Observable<Asistencia>{
    return this.httpClient.post<Asistencia>(`${environment.apiUrl}/asistencias`, newAsistencia);
  }

  putAsistencia(asistencia:any):Observable<Asistencia>{
    return this.httpClient.put<Asistencia>(`${environment.apiUrl}/asistencias/${asistencia.id}`, asistencia)
  }

  //Service asignatura
  getAsignatura():Observable<Asignaturas[]>{
    return this.httpClient.get<Asignaturas[]>(`${environment.apiUrl}/asignaturas`);
  }

}
