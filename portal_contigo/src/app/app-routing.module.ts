import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'mis-pendientes',
    loadChildren: () => import('./pages/mis-pendientes/mis-pendientes.module').then( m => m.MisPendientesPageModule)
  },
  {
    path: 'solicitudes',
    loadChildren: () => import('./pages/solicitudes/solicitudes.module').then( m => m.SolicitudesPageModule)
  },
  {
    path: 'consultas',
    loadChildren: () => import('./pages/consultas/consultas.module').then( m => m.ConsultasPageModule)
  },
  {
    path: 'cartelera',
    loadChildren: () => import('./pages/cartelera/cartelera.module').then( m => m.CarteleraPageModule)
  },
  {
    path: 'politicas',
    loadChildren: () => import('./pages/politicas/politicas.module').then( m => m.PoliticasPageModule)
  },
  {
    path: 'preguntas',
    loadChildren: () => import('./pages/preguntas/preguntas.module').then( m => m.PreguntasPageModule)
  },
  {
    path: 'cambiar-contrasena',
    loadChildren: () => import('./pages/cambiar-contrasena/cambiar-contrasena.module').then( m => m.CambiarContrasenaPageModule)
  },
  {
    path: 'aprobaciones',
    loadChildren: () => import('./pages/aprobaciones/aprobaciones.module').then( m => m.AprobacionesPageModule)
  },  {
    path: 'componente-auxilio-convencional',
    loadChildren: () => import('./pages/componente-auxilio-convencional/componente-auxilio-convencional.module').then( m => m.ComponenteAuxilioConvencionalPageModule)
  },
  {
    path: 'mis-pendientes-detalle',
    loadChildren: () => import('./pages/mis-pendientes-detalle/mis-pendientes-detalle.module').then( m => m.MisPendientesDetallePageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
