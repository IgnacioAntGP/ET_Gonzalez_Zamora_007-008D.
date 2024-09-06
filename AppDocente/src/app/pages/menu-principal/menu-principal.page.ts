import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuPrincipalPageModule } from './menu-principal.module';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

  constructor(private menuController: MenuController, private router: Router) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first'); //Invoca al menu acoplado codificado en el componente padre
  }

  redirigir(){
    this.router.navigate(['/info-clase'])
  }

}
