import { Component, OnInit } from '@angular/core';
import { IonDatetime, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Asignaturas } from 'src/interfaces/IAsignaturas';
import { ApicrudService } from 'src/app/services/api-crud.service';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mis-asignaturas',
  templateUrl: './mis-asignaturas.page.html',
  styleUrls: ['./mis-asignaturas.page.scss'],
})
export class MisAsignaturasPage implements OnInit {

  asignaturas: Asignaturas[]=[];
  imagenes_asignaturas: any[] = [];
  nombre_usuario = "";
  userData: any;
  rut_alumno: string = sessionStorage.getItem('rut') || 'Rut';

  constructor(private menucontroller: MenuController,
              private router: Router,
              private apiCrud: ApicrudService,
              private auth: AuthService) { }

  ngOnInit() {
    this.nombre_usuario = sessionStorage.getItem('username') || 'Username';
    console.log(this.nombre_usuario);
    this.obtenerAsignaturas();
    this.obtenerImagenesAsignaturas();
  }

  mostrarMenu(){
    this.menucontroller.open('first');
  }

  obtenerAsignaturas(){
    this.apiCrud.getAsignaturas().subscribe(data =>{
      this.asignaturas = data;
      console.log('Asignaturas:', this.asignaturas)
    });
  }

  obtenerImagenesAsignaturas(){
    this.apiCrud.getImagenes().subscribe(resp =>{
      this.imagenes_asignaturas = resp;
      console.log('Imagenes:', this.asignaturas)
    })
  }

  registrarAsistencia(asignatura: Asignaturas){
    this.router.navigate(['/registro-asistencia'],
      {queryParams:{asignatura: JSON.stringify(asignatura)}}
    )
  }

  justificar(Observable: Asignaturas){
    this.router.navigate(['/justificacion',],
      {queryParams:{asignaturas: JSON.stringify(Observable)}}
    )
  }

}
