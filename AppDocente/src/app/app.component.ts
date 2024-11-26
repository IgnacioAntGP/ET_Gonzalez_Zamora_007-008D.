import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
      name:'Cerrar Sesion',
      redirecTo:'/inicio',
    },
  ];

  constructor(private router: Router) {
    this.router = router;
  }

  cerrarSesion() {
    sessionStorage.clear();
    this.router.navigate(['/inicio']);
  }

  navegar(ruta : string){
    this.router.navigate([ruta])
  }

  
}
