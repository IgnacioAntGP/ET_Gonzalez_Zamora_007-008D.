import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/services/api-crud.service';
import { AuthService } from 'src/app/services/auth.service';
import { Justificaciones } from 'src/interfaces/IJustificaciones';
import { Router } from '@angular/router';

@Component({
  selector: 'app-justificaciones',
  templateUrl: './justificaciones.page.html',
  styleUrls: ['./justificaciones.page.scss'],
})
export class JustificacionesPage implements OnInit {

  usuarioActual= sessionStorage.getItem('username') || 'Username';
  userData:any = "";
  nombreDocente = "";

  justificaciones:Justificaciones[]=[];

  constructor(private apiCrud:ApiCrudService, private auth:AuthService, private router: Router) {
    this.obtenerJustificaciones();
    this.obtenerDocente();
  }

  ngOnInit() {
  }

  obtenerJustificaciones(){
    this.apiCrud.getJustificaciones().subscribe(data => {
      this.justificaciones = data;
      console.log(this.justificaciones);
    });
  }

  obtenerDocente(){
    this.auth.getByUsername(this.usuarioActual).subscribe(resp =>{
      this.userData = resp;
      this.nombreDocente = this.userData[0].nombre;
    })
  }

  ingresarComentario(justificacion:any){
    this.router.navigate( ['/detalle-justificacion'],
      {queryParams:{justificacion: JSON.stringify(justificacion)}});
  }

}
