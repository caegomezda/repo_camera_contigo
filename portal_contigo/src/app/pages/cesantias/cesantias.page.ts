import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-cesantias',
  templateUrl: './cesantias.page.html',
  styleUrls: ['./cesantias.page.scss'],
})
export class CesantiasPage implements OnInit {

  constructor(private router : Router,
              private storage : TemporalMovilStoreService) { }

  ngOnInit() {
  }


  tomarFoto(){
    console.log("Tomar foto");
    this.storage.getNombreSolicitud("Cesantias");
    this.router.navigate(['/camara-page']);
  }
  verRequsitos(){
    this.sendNombresolicitud()
    this.router.navigate(['/requesitos-solicitudes']);
  }

  sendNombresolicitud(){
    this.storage.getNombreSolicitud("Cesantias");
  }

  enviarCesantias(){
    console.log("Enviar Informacion");
  }

}
