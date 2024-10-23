import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApicrudService } from 'src/app/services/api-crud.service';


@Component({
  selector: 'app-actualizar-justificaciones',
  templateUrl: './actualizar-justificaciones.page.html',
  styleUrls: ['./actualizar-justificaciones.page.scss'],
})
export class ActualizarJustificacionesPage implements OnInit {

  justificacion={
    id:"",
    alumno:"",
    asignatura:"",
    docente:"",
    descripcion:"",
    imagen:"",
    fecha:""
  }

  unaJustificacion:any;

  constructor(private router: Router,
              private activated: ActivatedRoute,
              private alerta: AlertController,
              private apiCrud: ApicrudService) {
    this.activated.queryParams.subscribe(params => {
      this.unaJustificacion = JSON.parse(params['justificacion']);
    });
  }

  ngOnInit() {
    this.justificacion = this.unaJustificacion;
  }

  //Método para llamar al servicio put del API Crud
  modificarJustificacion(){
    this.apiCrud.putJustificaciones(this.justificacion).subscribe();
    this.mensajeActualizar();
  }

  async mensajeActualizar(){
    const alert = await this.alerta.create({
      header: 'Actualización',
      mode: 'ios',
      message: 'Se ha modificado correctamente',
      buttons: [
        {
          text: 'Continuar',
          role: 'confirm',
          handler: () =>{
            this.router.navigate(['/mis-justificaciones'])
          },
        },
      ],
    });

    await alert.present();
  }

  async actualizar(){
    const alert = await this.alerta.create({
      header: 'Actualización',
      mode: 'ios',
      message: 'Desea modificar la información?',
      buttons: [
        {
          text: 'Si',
          role: 'confirm',
          handler: () =>{
            this.modificarJustificacion();
          },
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
          }
        }
      ],
    });

    await alert.present();
  }

  volver(){
    this.router.navigate(['/mis-justificaciones']);
  }

}
