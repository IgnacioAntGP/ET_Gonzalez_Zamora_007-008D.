import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  constructor(private menucontroller: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menucontroller.open('first');
  }


}
