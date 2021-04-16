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
  },
  {
    path: 'mis-pendientes-detalle',
    loadChildren: () => import('./pages/mis-pendientes-detalle/mis-pendientes-detalle.module').then( m => m.MisPendientesDetallePageModule)
  },
  {
    path: 'aprobaciones-detalle',
    loadChildren: () => import('./pages/aprobaciones-detalle/aprobaciones-detalle.module').then( m => m.AprobacionesDetallePageModule)
  },
  {
    path: 'vacaciones',
    loadChildren: () => import('./pages/vacaciones/vacaciones.module').then( m => m.VacacionesPageModule)
  },
  {
    path: 'auxilios-convecionales',
    loadChildren: () => import('./pages/auxilios-convecionales/auxilios-convecionales.module').then( m => m.AuxiliosConvecionalesPageModule)
  },
  {
    path: 'auxilios-estudio',
    loadChildren: () => import('./pages/auxilios-estudio/auxilios-estudio.module').then( m => m.AuxiliosEstudioPageModule)
  },
  {
    path: 'requesitos-solicitudes',
    loadChildren: () => import('./pages/requesitos-solicitudes/requesitos-solicitudes.module').then( m => m.RequesitosSolicitudesPageModule)
  },
  {
    path: 'camara-page',
    loadChildren: () => import('./pages/camara-page/camara-page.module').then( m => m.CamaraPagePageModule)
  },
  {
    path: 'cesantias',
    loadChildren: () => import('./pages/cesantias/cesantias.module').then( m => m.CesantiasPageModule)
  },
  {
    path: 'cambio-beneficiario',
    loadChildren: () => import('./pages/cambio-beneficiario/cambio-beneficiario.module').then( m => m.CambioBeneficiarioPageModule)
  },
  {
    path: 'reporte-calamidad-incapacidad',
    loadChildren: () => import('./pages/reporte-calamidad-incapacidad/reporte-calamidad-incapacidad.module').then( m => m.ReporteCalamidadIncapacidadPageModule)
  },
  {
    path: 'reporte-nomina',
    loadChildren: () => import('./pages/reporte-nomina/reporte-nomina.module').then( m => m.ReporteNominaPageModule)
  },
  {
    path: 'citas-presenciales',
    loadChildren: () => import('./pages/citas-presenciales/citas-presenciales.module').then( m => m.CitasPresencialesPageModule)
  },
  {
    path: 'calificar-servicios',
    loadChildren: () => import('./pages/calificar-servicios/calificar-servicios.module').then( m => m.CalificarServiciosPageModule)
  },
  {
    path: 'actualizar-datos',
    loadChildren: () => import('./pages/actualizar-datos/actualizar-datos.module').then( m => m.ActualizarDatosPageModule)
  },
  {
    path: 'certificados-ingresos',
    loadChildren: () => import('./pages/certificados-ingresos/certificados-ingresos.module').then( m => m.CertificadosIngresosPageModule)
  },
  {
    path: 'nomina-detalle',
    loadChildren: () => import('./pages/nomina-detalle/nomina-detalle.module').then( m => m.NominaDetallePageModule)
  },
  {
    path: 'citas-detalle',
    loadChildren: () => import('./pages/citas-detalle/citas-detalle.module').then( m => m.CitasDetallePageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
