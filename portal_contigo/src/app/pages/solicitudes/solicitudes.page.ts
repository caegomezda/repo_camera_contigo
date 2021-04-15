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
  }
  reportesDeNomina(){
    console.log("reportesDeNomina");
  }
  camboBeneficiarioSeguridadSocial(){
    console.log("camboBeneficiarioSeguridadSocial");
  }
  reporteIncapacidadYCalamidad(){
    console.log("reporteIncapacidadYCalamidad")
  }
  citasPresenciales(){
    console.log("citasPresenciales")
  }
  calificarServicios(){
    console.log("calificarServicios")
  }
  actualizarDatosPersonales(){
    console.log("actualizarDatosPersonales")
  }
  certificadoDeIngresoYRetencion(){
    console.log("certificadoDeIngresoYRetencion")
  }

}
