import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private menucontroller: MenuController, 
              private alertcontroller: AlertController,
              private router: Router) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menucontroller.open('first');
  }

  hacerLogin(){
    this.router.navigate(['/login'])
  }

  hacerRegistro(){
    this.router.navigate(['/registrar'])
  }

 



   
  

 }

