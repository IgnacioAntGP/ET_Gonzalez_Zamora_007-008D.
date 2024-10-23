import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApicrudService } from 'src/app/services/api-crud.service';
import { AuthService } from 'src/app/services/auth.service';
import { Asistencias } from 'src/interfaces/IAsistencia';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registro-asistencia',
  templateUrl: './registro-asistencia.page.html',
  styleUrls: ['./registro-asistencia.page.scss'],
})
export class RegistroAsistenciaPage implements OnInit {

  nombre_usuario:string = sessionStorage.getItem('username') || 'Username';
  asignatura:any;
  userData:any;
  asistencias:any;
  fechaActual:string = "";

  nuevaAsistencia: Asistencias ={
    rut_alumno: 0,
    id_asignatura: 0,
    fecha:"",
    nombre: "",
    docente: "",
    email_alumno: "",
  };

  constructor(private route: ActivatedRoute,
              private router: Router,
              private alerta: AlertController,
              private apiCrud: ApicrudService,
              private auth: AuthService) {
    this.route.queryParams.subscribe(params => {
      this.asignatura = JSON.parse(params['asignatura']);
      this.nuevaAsistencia.id_asignatura = this.asignatura.id;
      this.nuevaAsistencia.nombre= this.asignatura.nombre;
      this.nuevaAsistencia.docente = this.asignatura.docente;
    });
  }

  ngOnInit(){
    console.log('Asignatura actual:', this.asignatura);
    this.obtenerUserData();
    this.obtenerAsistencias();
    console.log('Nueva asistencia:', this.nuevaAsistencia);
    this.obtenerFechaActual();
    console.log(this.fechaActual);
  };

  obtenerUserData(){
    this.auth.getByUsername(this.nombre_usuario).subscribe(resp =>{
      this.userData = resp;
      this.nuevaAsistencia.rut_alumno = this.userData[0].rut;
      this.nuevaAsistencia.email_alumno = this.userData[0].email;
    })
  };

  obtenerAsistencias(){
    this.apiCrud.getAsistencias().subscribe( resp =>{
      this.asistencias = resp;
      console.log("Asistencias sistema:", this.asistencias);
    })
  }

  registrarAsistencia(){
    this.apiCrud.postAsistencias(this.nuevaAsistencia).subscribe();
  }

  enviarDatos(){
    this.router.navigate(['/qr'],
      {queryParams:{asistencia: JSON.stringify(this.nuevaAsistencia)}})
  }

  async mensajeConfirmar(){
    const alert = await this.alerta.create({
      header: 'Ingresando asistencia a: ',
      subHeader: this.asignatura.nombre,
      mode:'ios',
      cssClass:'alertHeader',
      buttons: [{
          text: 'Si',
          role: 'confirm',
          handler: () => {
            this.mensajeExito();
            this.registrarAsistencia();
          },
        },
        {
        text: 'No',
          role: 'cancel',
          handler: () =>{
            this.router.navigate(['/mis-asignaturas']);
          }
        }],
    });

    await alert.present();
  };

  async mensajeExito(){
    const alert = await this.alerta.create({
      header: 'Su asistencia ha sido ingresada correctamente a: ',
      subHeader: this.asignatura.nombre,
      mode:'ios',
      cssClass:'alertHeader',
      buttons: [{
          text: 'Continuar',
          role: 'confirm',
          handler: () => {
            this.enviarDatos();
          },
        }],
    });

    await alert.present();
  };

  obtenerFechaActual(){
    const fecha = new Date();
    const dia = fecha.getDate().toString();
    const mes = fecha.getMonth() + 1;
    const anno = fecha.getFullYear().toString();
    const hora = fecha.getHours().toString();
    const minutos = fecha.getMinutes().toString().padStart(2,'0');
    const segundos = fecha.getSeconds().toString().padStart(2,'0');
    this.nuevaAsistencia.fecha = `${dia}/${mes}/${anno} ${hora}:${minutos}:${segundos}`;
  }

}
