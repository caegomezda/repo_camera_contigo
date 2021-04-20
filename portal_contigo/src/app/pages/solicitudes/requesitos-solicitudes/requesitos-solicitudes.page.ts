import { Component, OnInit } from '@angular/core';
import { ParametrosService } from 'src/app/services/parametros.service';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-requesitos-solicitudes',
  templateUrl: './requesitos-solicitudes.page.html',
  styleUrls: ['./requesitos-solicitudes.page.scss'],
})
export class RequesitosSolicitudesPage implements OnInit {
  nombreSolicitud:any;
  infoParametros:any;
  nombreSolicitud_2:any;
  isLoad:Boolean = false;
  constructor(private storage: TemporalMovilStoreService,
              private parametros: ParametrosService) { }

  ngOnInit() {
    
  }
  ionViewWillEnter(){
    this.getNombreSolicitud();
  }

  async getNombreSolicitud(){
    this.nombreSolicitud = await this.storage.sendNombresolicitud();
    this.nombreSolicitud_2 = this.nombreSolicitud
    await this.nameConversor();
    await this.getInfoParametros();
  }

  async getInfoParametros(){
    let form = {
      Tipo : "3",
      TipoSolicitud : this.nombreSolicitud,
    }
    let result = await this.parametros.listaParametros(form);
    if (result['ListaParametros'] == null) {
      this.infoParametros = result['MensajeDescripcion']
    }else{
      this.infoParametros = result['ListaParametros']

      this.isLoad = true;
    }
  }

  nameConversor(){

    if( this.nombreSolicitud == "Auxilios Convencionales"){
      this.nombreSolicitud = "AUXILIOS CONVENCIONALES";

    }else if( this.nombreSolicitud == "Auxilios Estudio"){
      this.nombreSolicitud = "AUXILIOS ESTUDIO";

    }else if( this.nombreSolicitud == "Cesantias"){
      this.nombreSolicitud = "SOLICITUD CESANTIAS";

    }else if( this.nombreSolicitud == "Cambio Beneficiario Seguridad Social"){
      this.nombreSolicitud = "CAMBIO BENEFICIARIO SEGURIDAD SOCIAL";

    }else if( this.nombreSolicitud == "Reporte Incapacidad y Calamidad"){
      this.nombreSolicitud = "REPORTE INCAPACIDADES";

    }else if( this.nombreSolicitud == "Certificado ingresos y retención"){
      this.nombreSolicitud = "CERTIFICADO INGRESOS Y RETENCIÓN";

    }
  }
}
