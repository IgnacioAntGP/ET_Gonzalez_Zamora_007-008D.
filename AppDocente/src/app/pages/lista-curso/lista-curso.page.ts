import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCrudService } from 'src/app/services/api-crud.service';
import { Asistencia } from 'src/interfaces/IAsistencia';

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.page.html',
  styleUrls: ['./lista-curso.page.scss'],
})
export class ListaCursoPage implements OnInit {

  curso:any;
  alumnos:any;
  dataCurso:any;
  dataAsistencia:any;

  paramRutAlumno:any;
  paramDocente:any;
  paramIdCurso:any;
  paramAsignatura:any;

  queryParamAsistencia:Asistencia={
    id:"",
    estado:false,
    fecha:"",
    asignatura:"",
    docente:"",
    email_alumno:"",
    rut_alumno:"",
    id_curso:""
  }

  constructor(private route:ActivatedRoute, private router:Router, private apiCrud:ApiCrudService) {
    this.route.queryParams.subscribe(params => {
      this.curso = JSON.parse(params['curso']);
    })
  }

  ngOnInit() {
    this.obtenerDataCurso();
    this.obtenerListaAlumnos();
  }

  obtenerListaAlumnos(){
    this.apiCrud.getAlumnos().subscribe(data =>{
      this.alumnos = data;
    });
  }

  obtenerDataCurso(){
    this.apiCrud.getCursoById(this.curso).subscribe(data =>{
      this.dataCurso = data;
    })
  }

  obtenerAsistencia(){
    this.apiCrud.getAsistenciaByParams(this.paramRutAlumno, this.paramIdCurso, this.paramAsignatura, this.paramDocente).subscribe(
      data =>{
        this.dataAsistencia = data;
        this.queryParamAsistencia = this.dataAsistencia;
      }
    );
  }

  registrarAsistencia(alumno:any){
    this.router.navigate(['/camara'],
      {queryParams:{
        alumno: JSON.stringify(alumno),
        asistencia: JSON.stringify(this.queryParamAsistencia)
      }});
  }

}
