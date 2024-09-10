import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cerrar',
  templateUrl: './cerrar.page.html',
  styleUrls: ['./cerrar.page.scss'],
})
export class CerrarPage implements OnInit {

  constructor(private router: Router,private alertController: AlertController) { }

  ngOnInit() {
  }

}
