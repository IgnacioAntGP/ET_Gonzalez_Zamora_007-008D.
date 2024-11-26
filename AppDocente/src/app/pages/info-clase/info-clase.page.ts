import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiCrudService } from 'src/app/services/api-crud.service';

@Component({
  selector: 'app-info-clase',
  templateUrl: './info-clase.page.html',
  styleUrls: ['./info-clase.page.scss'],
})
export class InfoClasePage implements OnInit {

  cursos:any;
  cursoSeleccionado:any;

  constructor(private alertController: AlertController, private router: Router, private apiCrud: ApiCrudService) { }

  ngOnInit() {
    this.obtenerCursos();
  }

  obtenerCursos(){
    this.apiCrud.getCursos().subscribe(data =>{
      this.cursos = data;
      console.log(this.cursos)
    })
  }

  verCurso(cursoSeleccionado:any){
    if(cursoSeleccionado){
      this.router.navigate(['/lista-curso'],
        {queryParams:{curso: JSON.stringify(cursoSeleccionado)}});
    }
    else{
      console.log("ERROR. No se ha seleccionado un curso")
    }
  }
}
