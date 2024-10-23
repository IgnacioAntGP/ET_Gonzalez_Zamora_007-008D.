import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Users } from 'src/interfaces/users';
import { ApicrudService } from 'src/app/services/api-crud.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-modificar-perfil',
  templateUrl: './modificar-perfil.page.html',
  styleUrls: ['./modificar-perfil.page.scss'],
})
export class ModificarPerfilPage implements OnInit {

  alumno: any;
  
  constructor(private router:Router,
              private activated: ActivatedRoute,
              private apicrud: ApicrudService,
              private menucontroller: MenuController) { 
                this.activated.queryParams.subscribe(params =>{
                  if(params['alumno']){
                    this.alumno = JSON.parse(params['alumno']);
                  }
                })
              }

  ngOnInit() {
    console.log('hola hola',this.alumno)
  }
  guardarCambios(){

  }


}
