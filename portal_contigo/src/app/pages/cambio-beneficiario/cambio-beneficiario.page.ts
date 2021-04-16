import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-cambio-beneficiario',
  templateUrl: './cambio-beneficiario.page.html',
  styleUrls: ['./cambio-beneficiario.page.scss'],
})
export class CambioBeneficiarioPage implements OnInit {

  constructor(private router : Router,
    private storage : TemporalMovilStoreService) { }

  ngOnInit() {
  }
  
  
  tomarFoto(){
    console.log("Tomar foto");
    this.storage.getNombreSolicitud("Cambio Beneficiario Seguridad Social");
    this.router.navigate(['/camara-page']);
  }
  verRequsitos(){
    this.sendNombresolicitud()
    this.router.navigate(['/requesitos-solicitudes']);
  }
  
  sendNombresolicitud(){
    this.storage.getNombreSolicitud("Cambio Beneficiario Seguridad Social");
  }
  
  enviarCambiosBene(){
    console.log("Enviar Informacion");
  }
}
