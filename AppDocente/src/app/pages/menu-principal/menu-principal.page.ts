import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuPrincipalPageModule } from './menu-principal.module';
import { ApiCrudService } from 'src/app/services/api-crud.service';
import { AuthService } from 'src/app/services/auth.service';
import { Asignaturas } from 'src/interfaces/IAsignatura';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

  asignaturas:Asignaturas[]=[];
  nombre:any;
  docente:any;
  nombreDocente:any;

  constructor(private menuController: MenuController, private router: Router, private apicrud: ApiCrudService, private auth: AuthService) { }

  ngOnInit() {
    this.nombre = sessionStorage.getItem('username') || 'Usuario';
    this.obtenerAsignaturas();
    this.obtenerDocente();
  }

  obtenerAsignaturas(){
    this.apicrud.getAsignatura().subscribe(resp=>{
      this.asignaturas = resp;
      console.log(this.asignaturas)
    })
  }

  obtenerDocente(){
    this.auth.getByUsername(this.nombre).subscribe(resp=>{
      this.docente = resp;
      this.nombreDocente = this.docente[0].nombre;
      console.log(this.docente);
      console.log(this.nombreDocente);

    })
  }

  mostrarMenu(){
    this.menuController.open('first'); //Invoca al menu acoplado codificado en el componente padre
  }

  redirigir(){
    this.router.navigate(['/info-clase'])
  }

}
