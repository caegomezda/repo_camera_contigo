import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss'],
})
export class SolicitudesPage implements OnInit {




  constructor(private router: Router) { }

  ngOnInit() {
  }

  auxiliosConvencionales(){
    console.log("auxiliosConvencionales");
      this.router.navigate(['/auxilios-convecionales']);
  }

  auxiliosEstudio(){
    console.log("auxiliosEstudio");
    this.router.navigate(['/auxilios-estudio']);
  }

  vacaciones(){
    console.log("vacaciones");
    this.router.navigate(['/vacaciones']);
  }

  cesantias(){
    console.log("cesantias");
    this.router.navigate(['/cesantias']);
    
  }
  reportesDeNomina(){
    console.log("reportesDeNomina");
    this.router.navigate(['/reporte-nomina']);
  }
  camboBeneficiarioSeguridadSocial(){
    console.log("camboBeneficiarioSeguridadSocial");
    this.router.navigate(['/cambio-beneficiario']);

  }
  reporteIncapacidadYCalamidad(){
    console.log("reporteIncapacidadYCalamidad");
    this.router.navigate(['/reporte-calamidad-incapacidad']);
    
  }
  citasPresenciales(){
    console.log("citasPresenciales");
    this.router.navigate(['/citas-presenciales']);

  }
  calificarServicios(){
    console.log("calificarServicios")
    this.router.navigate(['/calificar-servicios']);

  }
  actualizarDatosPersonales(){
    console.log("actualizarDatosPersonales")
  }
  certificadoDeIngresoYRetencion(){
    console.log("certificadoDeIngresoYRetencion")
  }

}
