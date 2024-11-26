import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Asistencia } from 'src/interfaces/IAsistencia';
import { ApiCrudService } from 'src/app/services/api-crud.service';
import { Camera,CameraResultType,CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  alumno:any;
  cursoData:any;
  asistencia:any;

  alumnoAsistencia:Asistencia = {
    id:"",
    estado: false,
    fecha: "",
    asignatura: "",
    docente: "",
    email_alumno: "",
    rut_alumno: "",
    id_curso: ""
  }

  constructor(private route:ActivatedRoute, private apiCrud:ApiCrudService) {
    this.route.queryParams.subscribe(params => {
      console.log(params)
      this.alumno = JSON.parse(params['alumno']);
      console.log("alumno", this.alumno);
      this.asistencia = JSON.parse(params['asistencia']);
      console.log("asistencia", this.asistencia)
    })
  }

  ngOnInit() {
    this.alumnoAsistencia = this.asistencia;
    console.log("Asistencia POST",this.alumnoAsistencia);
    Camera.requestPermissions();
  }

  async leerQr(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    })
  }

  registrarAsistencia(){
    this.alumnoAsistencia.estado = true;
    this.apiCrud.putAsistencia(this.alumnoAsistencia).subscribe();
    this.leerQr()
  }

  obtenerCurso(){
    this.apiCrud.getCursoById(this.alumno.idCurso).subscribe(data =>{
      this.cursoData = data;
    })
  }

  /*registrarAsistencia(){
    this.newAsistencia.estado = true;
    this.newAsistencia.email_alumno = this.alumno.email;
    this.newAsistencia.rut_alumno = this.alumno.rut;
    this.newAsistencia.id_curso = this.alumno.idCurso;
    this.obtenerCurso();
    this.obtenerFechaActual();
    console.log("newAsistencia", this.newAsistencia);
    this.apiCrud.postAsistencia(this.newAsistencia).subscribe();
  }*/

}
