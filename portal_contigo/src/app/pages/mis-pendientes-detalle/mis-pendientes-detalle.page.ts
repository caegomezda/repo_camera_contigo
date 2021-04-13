import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemporalMovilStoreService } from '../../services/temporal-movil-store.service';

@Component({
  selector: 'app-mis-pendientes-detalle',
  templateUrl: './mis-pendientes-detalle.page.html',
  styleUrls: ['./mis-pendientes-detalle.page.scss'],
})
export class MisPendientesDetallePage implements OnInit {
  solicitudDetalle:any
  isLoad = false
  constructor(private storage: TemporalMovilStoreService,
              private router: Router) { }

  ngOnInit() {
    console.log("mis pendientes detalle");
    this.getListSolicitudDetalle()
  }

  async getListSolicitudDetalle(){
    let result = await this.storage.sendInfoListSolicitudDetalle();
    this.solicitudDetalle = result
    this.isLoad = true
    console.log("this.solicitudDetalle",this.solicitudDetalle);
  }

  regresarAMisPendientes(){
    console.log("Mis Pendientes");
    this.router.navigate(['/mis-pendientes']);
    
  }

}
