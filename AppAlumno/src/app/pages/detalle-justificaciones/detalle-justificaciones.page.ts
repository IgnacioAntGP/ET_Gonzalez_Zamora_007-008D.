import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApicrudService } from 'src/app/services/api-crud.service';
import { Justificaciones } from 'src/interfaces/IJustificaciones';

@Component({
  selector: 'app-detalle-justificaciones',
  templateUrl: './detalle-justificaciones.page.html',
  styleUrls: ['./detalle-justificaciones.page.scss'],
})
export class DetalleJustificacionesPage implements OnInit {

  justificacion:any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private alerta: AlertController,
              private apiCrud: ApicrudService) {
    this.route.queryParams.subscribe(params => {
      this.justificacion = JSON.parse(params['justificacion']);
    })
  }

  ngOnInit() {
  }

  editarJustificacion(Observable: Justificaciones){
    this.router.navigate(['/actualizar-justificaciones', this.justificacion.id],
    {queryParams:{justificacion: JSON.stringify(Observable)}});
  }

  //LLamamos al servicio de eliminar de la API Crud
  eliminar(){
    this.apiCrud.deleteJustificaciones(this.justificacion).subscribe();
    this.mensajeEliminar();
  }

  async eliminarJustificacion(){
    const alert = this.alerta.create({
      header: 'Eliminación',
      mode: 'ios',
      message: '¿Desea editar la justificación?',
      buttons: [
        {
          text: 'Si',
          role: 'confirm',
          handler: ()=>{
            this.eliminar();
          }
        },
        {
          text: 'No',
          role: 'cancel',
          handler: ()=>{
          }
        },
      ],
    });

    (await alert).present();
  }

  async mensajeEliminar(){
    const alert = await this.alerta.create({
      header: 'Eliminación',
      mode: 'ios',
      message: 'Se ha eliminado correctamente',
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

  regresar(){
    this.router.navigate(['/mis-justificaciones']);
  }
}
