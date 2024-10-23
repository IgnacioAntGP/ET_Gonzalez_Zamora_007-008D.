import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  username: string= "";

  constructor(private menucontroller: MenuController, private authservice: AuthService) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username') || 'Usuario';
  }

  mostrarMenu(){
    this.menucontroller.open('first');
  }

  swiperSlideChanged(e:any){
    console.log('changed: ',e);
  }

}
