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
    loadChildren: () => import('./pages/mis-pendientes/mis-pendientes-detalle/mis-pendientes-detalle.module').then( m => m.MisPendientesDetallePageModule)
  },
  {
    path: 'aprobaciones-detalle',
    loadChildren: () => import('./pages/aprobaciones/aprobaciones-detalle/aprobaciones-detalle.module').then( m => m.AprobacionesDetallePageModule)
  },
  {
    path: 'vacaciones',
    loadChildren: () => import('./pages/solicitudes/vacaciones/vacaciones.module').then( m => m.VacacionesPageModule)
  },
  {
    path: 'auxilios-convecionales',
    loadChildren: () => import('./pages/solicitudes/auxilios-convecionales/auxilios-convecionales.module').then( m => m.AuxiliosConvecionalesPageModule)
  },
  {
    path: 'auxilios-estudio',
    loadChildren: () => import('./pages/solicitudes/auxilios-estudio/auxilios-estudio.module').then( m => m.AuxiliosEstudioPageModule)
  },
  {
    path: 'requesitos-solicitudes',
    loadChildren: () => import('./pages/solicitudes/requesitos-solicitudes/requesitos-solicitudes.module').then( m => m.RequesitosSolicitudesPageModule)
  },
  {
    path: 'camara-page',
    loadChildren: () => import('./pages/camara-page/camara-page.module').then( m => m.CamaraPagePageModule)
  },
  {
    path: 'cesantias',
    loadChildren: () => import('./pages/solicitudes/cesantias/cesantias.module').then( m => m.CesantiasPageModule)
  },
  {
    path: 'cambio-beneficiario',
    loadChildren: () => import('./pages/solicitudes/cambio-beneficiario/cambio-beneficiario.module').then( m => m.CambioBeneficiarioPageModule)
  },
  {
    path: 'reporte-calamidad-incapacidad',
    loadChildren: () => import('./pages/solicitudes/reporte-calamidad-incapacidad/reporte-calamidad-incapacidad.module').then( m => m.ReporteCalamidadIncapacidadPageModule)
  },
  {
    path: 'reporte-nomina',
    loadChildren: () => import('./pages/solicitudes/reporte-nomina/reporte-nomina.module').then( m => m.ReporteNominaPageModule)
  },
  {
    path: 'citas-presenciales',
    loadChildren: () => import('./pages/solicitudes/citas-presenciales/citas-presenciales.module').then( m => m.CitasPresencialesPageModule)
  },
  {
    path: 'calificar-servicios',
    loadChildren: () => import('./pages/solicitudes/calificar-servicios/calificar-servicios.module').then( m => m.CalificarServiciosPageModule)
  },
  {
    path: 'actualizar-datos',
    loadChildren: () => import('./pages/solicitudes/actualizar-datos/actualizar-datos.module').then( m => m.ActualizarDatosPageModule)
  },
  {
    path: 'certificados-ingresos',
    loadChildren: () => import('./pages/solicitudes/certificados-ingresos/certificados-ingresos.module').then( m => m.CertificadosIngresosPageModule)
  },
  {
    path: 'nomina-detalle',
    loadChildren: () => import('./pages/solicitudes/nomina-detalle/nomina-detalle.module').then( m => m.NominaDetallePageModule)
  },
  {
    path: 'citas-detalle',
    loadChildren: () => import('./pages/solicitudes/citas-detalle/citas-detalle.module').then( m => m.CitasDetallePageModule)
  },
  {
    path: 'comprobante-pago',
    loadChildren: () => import('./pages/consultas/comprobante-pago/comprobante-pago.module').then( m => m.ComprobantePagoPageModule)
  },
  {
    path: 'certificado-laboral',
    loadChildren: () => import('./pages/consultas/certificado-laboral/certificado-laboral.module').then( m => m.CertificadoLaboralPageModule)
  },
  {
    path: 'primas-legales',
    loadChildren: () => import('./pages/consultas/primas-legales/primas-legales.module').then( m => m.PrimasLegalesPageModule)
  },
  {
    path: 'primas-convencionales',
    loadChildren: () => import('./pages/consultas/primas-convencionales/primas-convencionales.module').then( m => m.PrimasConvencionalesPageModule)
  },
  {
    path: 'cesantias-intereses',
    loadChildren: () => import('./pages/consultas/cesantias-intereses/cesantias-intereses.module').then( m => m.CesantiasInteresesPageModule)
  },
  {
    path: 'historial-permisos',
    loadChildren: () => import('./pages/consultas/historial-permisos/historial-permisos.module').then( m => m.HistorialPermisosPageModule)
  },
  {
    path: 'historial-incapacidades',
    loadChildren: () => import('./pages/consultas/historial-incapacidades/historial-incapacidades.module').then( m => m.HistorialIncapacidadesPageModule)
  },
  {
    path: 'nivel-endeudamiento',
    loadChildren: () => import('./pages/consultas/nivel-endeudamiento/nivel-endeudamiento.module').then( m => m.NivelEndeudamientoPageModule)
  },
  {
    path: 'cartelera-detalle',
    loadChildren: () => import('./pages/cartelera/cartelera-detalle/cartelera-detalle.module').then( m => m.CarteleraDetallePageModule)
  },
  {
    path: 'politicas-detalle',
    loadChildren: () => import('./pages/politicas/politicas-detalle/politicas-detalle.module').then( m => m.PoliticasDetallePageModule)
  },
  {
    path: 'preguntas-detalle',
    loadChildren: () => import('./pages/preguntas/preguntas-detalle/preguntas-detalle.module').then( m => m.PreguntasDetallePageModule)
  },
  {
    path: 'registro-cena',
    loadChildren: () => import('./pages/registro-cena/registro-cena.module').then( m => m.RegistroCenaPageModule)
  },
  {
    path: 'registro-cena-detalle',
    loadChildren: () => import('./pages/registro-cena/registro-cena-detalle/registro-cena-detalle.module').then( m => m.RegistroCenaDetallePageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
