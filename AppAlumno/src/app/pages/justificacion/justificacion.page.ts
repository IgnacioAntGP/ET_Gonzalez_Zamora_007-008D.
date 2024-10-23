import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ApicrudService } from 'src/app/services/api-crud.service';
import { Justificacion } from 'src/interfaces/IJustificaciones';
import { Camera, CameraResultType,CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-justificacion',
  templateUrl: './justificacion.page.html',
  styleUrls: ['./justificacion.page.scss'],
})
export class JustificacionPage implements OnInit {

  imagen:string = "";

  justificacion: Justificacion ={
    alumno:"",
    asignatura:"",
    docente:"",
    descripcion:"",
    imagen:"",
    fecha:""
  };

  asignatura:any;
  alumno:any;
  docente:any;


  constructor(private alertcontroller: AlertController,
              private router: Router,
              private apiCrud: ApicrudService,
              private activatedRoute: ActivatedRoute) {
                this.activatedRoute.queryParams.subscribe(params => {
                  this.asignatura = JSON.parse(params['asignaturas']);
                })
                this.alumno = sessionStorage.getItem('username');
              }

  ngOnInit() {
  }

  crearJustificacion(){
    this.justificacion.alumno = this.alumno;
    this.justificacion.asignatura = this.asignatura.nombre;
    this.justificacion.docente = this.asignatura.docente;
    this.justificacion.imagen = this.imagen;
    this.apiCrud.postJustificaciones(this.justificacion).subscribe();
    this.mensajeExito;
    this.router.navigate(['/alumno']);
  }

  async seleccionImagen(){
    const imagen = await Camera.getPhoto({
      quality:90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos
    });
    this.imagen = 'data: imagen/jpeg;base64,'+imagen.base64String;
  }

  async mensajeExito(){
    const alert = await this.alertcontroller.create({
      header: '¿Está seguro del envío?',
      mode:'ios',
      cssClass:'alertHeader',
      buttons: [
       {
          text: 'Si',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['/clase']);
          },
        },
        {
        text: 'No',
          role: 'cancel',
          handler: () =>{

          }
        }
      ],
    });

    await alert.present();
   
  }
}


