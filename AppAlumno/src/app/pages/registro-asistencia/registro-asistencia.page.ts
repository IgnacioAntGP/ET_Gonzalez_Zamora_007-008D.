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
  errorTestFor:boolean=false;

  nuevaAsistencia: Asistencias ={
    estado: false,
    fecha: "",
    asignatura: "",
    docente: "",
    email_alumno: "",
    rut_alumno: "",
    id_curso: ""
  };

  constructor(private route: ActivatedRoute,
              private router: Router,
              private alerta: AlertController,
              private apiCrud: ApicrudService,
              private auth: AuthService) {
    this.route.queryParams.subscribe(params => {
      this.asignatura = JSON.parse(params['asignatura']);
      this.nuevaAsistencia.asignatura= this.asignatura.nombre;
      this.nuevaAsistencia.docente = this.asignatura.docente;
    });
  }

  ngOnInit(){
    console.log('Asignatura actual:', this.asignatura);
    this.obtenerUserData();
    this.obtenerAsistencias();
    console.log('Nueva asistencia:', this.nuevaAsistencia);
    this.obtenerFechaActual();
    console.log(this.errorTestFor)
  };

  obtenerUserData(){
    this.auth.getByUsername(this.nombre_usuario).subscribe(resp =>{
      this.userData = resp;
      this.nuevaAsistencia.rut_alumno = this.userData[0].rut;
      this.nuevaAsistencia.email_alumno = this.userData[0].email;
      this.nuevaAsistencia.id_curso = this.userData[0].idCurso;
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
    if(this.errorTestFor == true){
      console.log("ERROR. Ya ha ingresado una asistencia a esta asignatura");
    }
    else{
      this.registrarAsistencia();
      this.router.navigate(['/qr'],
      {queryParams:{asistencia: JSON.stringify(this.nuevaAsistencia)}})
    }
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
            this.testFor();
            if(this.errorTestFor == true){
              this.mensajeErrorFecha();
            }
            else{
              this.mensajeExito();
            }
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

  async mensajeErrorFecha(){
    const alert = await this.alerta.create({
      header: 'No fue posible añadir su asistencia',
      subHeader: 'Ya se ha registrado actualmente para esta clase',
      mode:'ios',
      cssClass:'alertHeader',
      buttons: [{
          text: 'Continuar',
          role: 'confirm',
          handler: () => {
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

  /*  AUN SIN NOMBRE SIGNIFICATIVO
    El método lo que hace es verificar en el arreglo de asistencias si alguna fecha coincide con la de la asistencia actual
    La variable que utiliza es errorTestFor<boolean> = false => si al fecha es diferente; true => cuando la fecha coincide
    con una del sistema.

    POR AÑADIR: tiene que haber una variable de "ASIGNATURA", ya que toma la asistencia de cualquiera y la compara
  */
  testFor(){
    for (let index = 0; index < this.asistencias.length; index++) {

      if(
          this.asistencias[index].fecha.substring(0,2) == this.nuevaAsistencia.fecha.substring(0,2) &&
          this.asistencias[index].asignatura == this.nuevaAsistencia.asignatura &&
          this.asistencias[index].rut_alumno == this.nuevaAsistencia.rut_alumno
        ){
        this.errorTestFor = true;
        break;
      }
    }
  }

}
