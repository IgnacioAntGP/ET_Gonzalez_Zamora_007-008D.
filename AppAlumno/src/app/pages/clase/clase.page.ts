import { Component, OnInit } from '@angular/core';
import { IonDatetime, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.page.html',
  styleUrls: ['./clase.page.scss'],
})
export class ClasePage implements OnInit {


  constructor(private menucontroller: MenuController,private router: Router,private alertcontroller: AlertController ) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menucontroller.open('first');
  }

  codigo(){
    this.router.navigate(['/qr'])
  }

  justificar(){
    this.router.navigate(['/justificacion'])
  }



}
