import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  asistencia:any;
  qrdata:string ='';
  qrWidth:number = 0;

  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.asistencia = JSON.parse(params['asistencia']);
      this.qrdata='';
    })
  }

  ngOnInit() {
    console.log("Asistencia QR:", this.asistencia);
    this.generarQR();
    this.setQRWidth();
  }

  generarQR(){
    this.qrdata=`Rut Alumno: ${this.asistencia.rut_alumno.substring(0,8)}
    Id asignatura: ${this.asistencia.id_asignatura}
    Fecha asistencia:${this.asistencia.fecha}
    Nombre asignatura: ${this.asistencia.nombre}
    Docente: ${this.asistencia.docente}
    Email alumno: ${this.asistencia.email_alumno}`;
    console.log("QR data:", this.qrdata)
  }

  setQRWidth() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    this.qrWidth = Math.min(screenWidth, screenHeight) * 0.9; // 80% del tamaño más pequeño
  }

  volver(){
    this.router.navigate(['/mis-asignaturas'])
  }

}
