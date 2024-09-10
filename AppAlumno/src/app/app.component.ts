import { Component } from '@angular/core';

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
      name:'Mis Clases',
      redirecTo:'/clase'
    },
    {
      icon:'exit-outline',
      name:'Cerrar Sesion',
      redirecTo:'/inicio'
    },

  ]

  constructor() {}
  
}
