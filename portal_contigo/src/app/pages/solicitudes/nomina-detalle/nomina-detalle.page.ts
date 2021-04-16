import { Component, OnInit } from '@angular/core';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-nomina-detalle',
  templateUrl: './nomina-detalle.page.html',
  styleUrls: ['./nomina-detalle.page.scss'],
})
export class NominaDetallePage implements OnInit {
  nombreSolicitud:any
  infoNomina:any
  constructor(private storage: TemporalMovilStoreService

  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getNombreSolicitud();
    this.getInfoNomina();
  }

  async getNombreSolicitud(){
    this.nombreSolicitud = await this.storage.sendNombresolicitud()
    console.log("this.nombreSolicitud",this.nombreSolicitud);
  }
  async getInfoNomina(){
    this.infoNomina = await this.storage.sendInfoNomina();
  }
  enviarInfoNomina(nSolicitud){
    console.log("Informacion Solicitud", nSolicitud);
  }
}
