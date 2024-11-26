import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizado.guard';
import { DesactivadoGuard } from './guards/desactivado.guard';

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
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [DesactivadoGuard]
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule),
    canActivate: [DesactivadoGuard]
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
    loadChildren: () => import('./pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'mis-justificaciones',
    loadChildren: () => import('./pages/mis-justificaciones/mis-justificaciones.module').then( m => m.MisJustificacionesPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'detalle-justificaciones',
    loadChildren: () => import('./pages/detalle-justificaciones/detalle-justificaciones.module').then( m => m.DetalleJustificacionesPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'actualizar-justificaciones/:id',
    loadChildren: () => import('./pages/actualizar-justificaciones/actualizar-justificaciones.module').then( m => m.ActualizarJustificacionesPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'mis-asistencias',
    loadChildren: () => import('./pages/mis-asistencias/mis-asistencias.module').then( m => m.MisAsistenciasPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'mis-asignaturas',
    loadChildren: () => import('./pages/mis-asignaturas/mis-asignaturas.module').then( m => m.MisAsignaturasPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'registro-asistencia',
    loadChildren: () => import('./pages/registro-asistencia/registro-asistencia.module').then( m => m.RegistroAsistenciaPageModule),
    canActivate: [AutorizadoGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
