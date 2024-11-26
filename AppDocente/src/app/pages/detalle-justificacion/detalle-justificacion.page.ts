import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCrudService } from 'src/app/services/api-crud.service';

@Component({
  selector: 'app-detalle-justificacion',
  templateUrl: './detalle-justificacion.page.html',
  styleUrls: ['./detalle-justificacion.page.scss'],
})
export class DetalleJustificacionPage implements OnInit {

  justificacion:any;
  comentario:any;

  constructor(private route:ActivatedRoute, private router:Router, private apiCrud:ApiCrudService ) {
    this.route.queryParams.subscribe(params => {
      this.justificacion = JSON.parse(params['justificacion']);
    })
  }

  ngOnInit() {
  }

  enviarComentario() {
    this.apiCrud.putJustificacion(this.justificacion).subscribe();
  }

}
