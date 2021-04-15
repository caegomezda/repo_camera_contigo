import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-auxilios-convecionales',
  templateUrl: './auxilios-convecionales.page.html',
  styleUrls: ['./auxilios-convecionales.page.scss'],
})
export class AuxiliosConvecionalesPage implements OnInit {

  constructor(private router : Router,
              private storage: TemporalMovilStoreService) { }

  ngOnInit() {
  }

  tomarFoto(){
    console.log("Tomar foto");
    this.router.navigate(['/camara-page']);
  }
  verRequsitos(){
    this.sendNombresolicitud()
    this.router.navigate(['/requesitos-solicitudes']);
  }

  sendNombresolicitud(){
  this.storage.getNombreSolicitud("Auxilios Convencionales");
  }

  enviarAuxConvencionales(){
    console.log("Enviar Informacion");
  }
}
