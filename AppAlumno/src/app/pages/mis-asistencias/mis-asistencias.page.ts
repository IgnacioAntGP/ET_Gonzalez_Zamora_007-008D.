import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Asistencias } from 'src/interfaces/IAsistencia';
import { ApicrudService } from 'src/app/services/api-crud.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mis-asistencias',
  templateUrl: './mis-asistencias.page.html',
  styleUrls: ['./mis-asistencias.page.scss'],
})
export class MisAsistenciasPage implements OnInit {

  asistencias: Asistencias[] = [];
  sesion_rut_alumno:string = "";
  usuarioActual= sessionStorage.getItem('username') || 'Username';
  userData:any;
  QRs:any
  qrdata:string ='';
  qrWidth:number = 0;

  constructor(private apiCrud: ApicrudService,
              private menu: MenuController,
              private auth: AuthService) {
                this.qrdata='';
              }

  ngOnInit() {
    this.obtenerAsistencias();
    this.obtenerAlumno();
    this.obtenerQRs();
  }

  mostrarMenu(){
    this.menu.open('first');
  }

  obtenerAsistencias(){
    this.apiCrud.getAsistencias().subscribe(data =>{
      this.asistencias = data;
      console.log(this.asistencias);
    });
  }

  obtenerAlumno(){
    this.auth.getByUsername(this.usuarioActual).subscribe(resp =>{
      this.userData = resp;
      console.log(this.userData);
      this.sesion_rut_alumno = this.userData[0].rut;

    })
  }

  obtenerQRs(){
    this.apiCrud.getQR().subscribe(data =>{
      this.QRs = data;
      this.qrdata = this.QRs[0].qrCode;
      console.log(this.QRs);
    })
  }

  setQRWidth() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    this.qrWidth = Math.min(screenWidth, screenHeight) * 0.9; // 80% del tamaño más pequeño
  }

}
