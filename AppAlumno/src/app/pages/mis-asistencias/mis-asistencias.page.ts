import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Asistencias } from 'src/interfaces/IAsistencia';
import { ApicrudService } from 'src/app/services/api-crud.service';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mis-asistencias',
  templateUrl: './mis-asistencias.page.html',
  styleUrls: ['./mis-asistencias.page.scss'],
})
export class MisAsistenciasPage implements OnInit {

  asistencias: Asistencias[] = [];
  sesion_rut_alumno:number = 0;
  usuarioActual= sessionStorage.getItem('username') || 'Username';
  userData:any;

  constructor(private router: Router,
              private apiCrud: ApicrudService,
              private menu: MenuController,
              private auth: AuthService) { }

  ngOnInit() {
    this.apiCrud.getAsistencias().subscribe(data =>{
      this.asistencias = data;
      console.log(this.asistencias);
    });
    this.obtenerAlumno();
    console.log(this.usuarioActual);
  }

  mostrarMenu(){
    this.menu.open('first');
  }

  obtenerAlumno(){
    this.auth.getByUsername(this.usuarioActual).subscribe(resp =>{
      this.userData = resp;
      this.sesion_rut_alumno = this.userData[0].rut;
      console.log(this.sesion_rut_alumno);
    })
  }

}
