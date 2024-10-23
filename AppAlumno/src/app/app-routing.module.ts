import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'alumno',
    loadChildren: () => import('./pages/alumno/alumno.module').then( m => m.AlumnoPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'cerrar',
    loadChildren: () => import('./pages/cerrar/cerrar.module').then( m => m.CerrarPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'justificacion',
    loadChildren: () => import('./pages/justificacion/justificacion.module').then( m => m.JustificacionPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'mis-justificaciones',
    loadChildren: () => import('./pages/mis-justificaciones/mis-justificaciones.module').then( m => m.MisJustificacionesPageModule)
  },
  {
    path: 'detalle-justificaciones',
    loadChildren: () => import('./pages/detalle-justificaciones/detalle-justificaciones.module').then( m => m.DetalleJustificacionesPageModule)
  },
  {
    path: 'actualizar-justificaciones/:id',
    loadChildren: () => import('./pages/actualizar-justificaciones/actualizar-justificaciones.module').then( m => m.ActualizarJustificacionesPageModule)
  },
  {
    path: 'mis-asistencias',
    loadChildren: () => import('./pages/mis-asistencias/mis-asistencias.module').then( m => m.MisAsistenciasPageModule)
  },
  {
    path: 'mis-asignaturas',
    loadChildren: () => import('./pages/mis-asignaturas/mis-asignaturas.module').then( m => m.MisAsignaturasPageModule)
  },
  {
    path: 'registro-asistencia',
    loadChildren: () => import('./pages/registro-asistencia/registro-asistencia.module').then( m => m.RegistroAsistenciaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
