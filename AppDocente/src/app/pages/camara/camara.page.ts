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

  constructor(private route:ActivatedRoute, private apiCrud:ApiCrudService) {
    this.route.queryParams.subscribe(params => {
      this.asistencia = JSON.parse(params['asistencia']);
      console.log("asistencia", this.asistencia)
    })
  }

  ngOnInit() {
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
    this.asistencia.estado = true;
      // Verificar si 'id' está presente
    console.log('ID de asistencia:', this.asistencia.id);

    if (this.asistencia.id) {
      // Solo si el ID está presente, realiza el PUT
      this.apiCrud.putAsistencia(this.asistencia).subscribe(
        response => {
          console.log('Asistencia actualizada', response);
        },
        error => {
          console.error('Error al actualizar la asistencia', error);
        }
      );
    } else {
      console.error('El ID de la asistencia es undefined o vacío');
    }

    /*console.log(this.asistencia);
    this.apiCrud.putAsistencia(this.asistencia).subscribe();*/
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
