import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss'],
})
export class SolicitudesPage implements OnInit {

  constructor(private  modalController: ModalController,
              private router: Router) { }

  ngOnInit() {
  }

  auxiliosConvencionales(){
    console.log("auxiliosConvencionales");
      this.router.navigate(['/componente-auxilio-convencional']);
  }

  auxiliosEstudio(){
    console.log("auxiliosEstudio");
  }
  vacaciones(){
    console.log("vacaciones");
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
