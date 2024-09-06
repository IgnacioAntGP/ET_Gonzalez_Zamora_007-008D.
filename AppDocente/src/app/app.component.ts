import { Component } from '@angular/core';

interface Opciones{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  opciones:Opciones[]=[
    {
      icon:'calendar-outline',
      name:'Clases',
      redirecTo:'/menu-principal',
    },
    {
      icon:'person-outline',
      name:'Mi Perfil',
      redirecTo:'/perfil',
    },
    {
      icon:'paper-plane-outline',
      name:'Salir',
      redirecTo:'/inicio',
    },
  ];

  constructor() {}

  
}
