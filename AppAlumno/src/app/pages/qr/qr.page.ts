import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApicrudService } from 'src/app/services/api-crud.service';
import { QR } from 'src/interfaces/IQR';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  asistencia:any;
  qrdata:string ='';
  qrWidth:number = 0;

  QR:QR={
    qrCode:"",
    rut_alumno:"",
    id_curso:""
  }

  constructor(private route:ActivatedRoute,
              private router:Router,
              private apiCrud:ApicrudService) {
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
    this.QR.qrCode= this.qrdata;
    this.QR.rut_alumno= this.asistencia.rut_alumno;
    this.QR.id_curso= this.asistencia.id_curso;
    this.apiCrud.postQR(this.QR).subscribe();
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
