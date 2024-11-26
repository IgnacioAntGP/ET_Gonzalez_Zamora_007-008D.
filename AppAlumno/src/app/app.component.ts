import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';

register();

interface Opciones{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  opciones : Opciones[]=[
    {
      icon:'home-outline',
      name:'Home Page',
      redirecTo:'/alumno'
    },
    {
      icon:'person-circle-outline',
      name:'Mi Perfil',
      redirecTo: '/perfil'
    },
    {
      icon:'book-outline',
      name:'Mis Asignaturas',
      redirecTo:'/mis-asignaturas'
    },
    {
      icon:'today-outline',
      name:'Mis asistencias',
      redirecTo:'/mis-asistencias'
    },
    {
      icon:'document-text-outline',
      name:'Mis Justificaciones',
      redirecTo:'/mis-justificaciones'
    },
    {
      icon:'exit-outline',
      name:'Cerrar Sesion',
      redirecTo:'/inicio'
    },
  ]


  constructor(private router:Router) {
    this.router = router;
  }

  cerrarSesion() {
    sessionStorage.clear();
    this.router.navigate(['/inicio']);
    window.location.reload();
  }

  navegar(ruta : string){
    this.router.navigate([ruta])
  }
}
