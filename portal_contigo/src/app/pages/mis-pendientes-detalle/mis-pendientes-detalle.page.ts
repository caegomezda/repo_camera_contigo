import { Component, OnInit } from '@angular/core';
import { TemporalMovilStoreService } from '../../services/temporal-movil-store.service';

@Component({
  selector: 'app-mis-pendientes-detalle',
  templateUrl: './mis-pendientes-detalle.page.html',
  styleUrls: ['./mis-pendientes-detalle.page.scss'],
})
export class MisPendientesDetallePage implements OnInit {
  solicitudDetalle:any
  constructor(private storage: TemporalMovilStoreService) { }

  ngOnInit() {
    console.log("mis pendientes detalle");
    this.getListSolicitudDetalle()
  }

  async getListSolicitudDetalle(){
    let result = await this.storage.sendInfoListSolicitudDetalle();
    this.solicitudDetalle = result
    console.log("this.solicitudDetalle",this.solicitudDetalle);
  }

}
