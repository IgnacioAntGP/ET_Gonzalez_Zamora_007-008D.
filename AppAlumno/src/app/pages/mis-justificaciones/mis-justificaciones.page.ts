import { Component, OnInit } from '@angular/core';
import { ApicrudService } from 'src/app/services/api-crud.service';
import { Justificaciones } from 'src/interfaces/IJustificaciones';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-justificaciones',
  templateUrl: './mis-justificaciones.page.html',
  styleUrls: ['./mis-justificaciones.page.scss'],
})
export class MisJustificacionesPage implements OnInit {

  justificaciones:Justificaciones[]=[];
  usuarioActual= sessionStorage.getItem('username') || 'Username';

  constructor(private apiCrud: ApicrudService, private router: Router) { }

  ngOnInit() {
    this.obtenerJustificaciones();
  }

  obtenerJustificaciones(){
    this.apiCrud.getJustificaciones().subscribe(data =>{
      this.justificaciones = data;
      console.log(this.justificaciones);
    })
  }

  buscarJustificacion(Observable: Justificaciones){
    this.router.navigate( ['/detalle-justificaciones'],
                          {queryParams:{justificacion: JSON.stringify(Observable)}});
  }

}
