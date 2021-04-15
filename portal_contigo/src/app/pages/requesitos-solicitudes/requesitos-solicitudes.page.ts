import { Component, OnInit } from '@angular/core';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-requesitos-solicitudes',
  templateUrl: './requesitos-solicitudes.page.html',
  styleUrls: ['./requesitos-solicitudes.page.scss'],
})
export class RequesitosSolicitudesPage implements OnInit {
  nombreSolicitud:any
  constructor(private storage: TemporalMovilStoreService) { }

  ngOnInit() {
    
  }
  ionViewWillEnter(){
    this.getNombreSolicitud();
  }

  async getNombreSolicitud(){
    this.nombreSolicitud = await this.storage.sendNombresolicitud()
    console.log("this.nombreSolicitud",this.nombreSolicitud);
  }

}
