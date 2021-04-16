import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-reporte-calamidad-incapacidad',
  templateUrl: './reporte-calamidad-incapacidad.page.html',
  styleUrls: ['./reporte-calamidad-incapacidad.page.scss'],
})
export class ReporteCalamidadIncapacidadPage implements OnInit {

  constructor(private router : Router,
    private storage : TemporalMovilStoreService) { }

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
    this.storage.getNombreSolicitud("Reporte Incapacidad y Calamidad");
  }
  
  enviarRepoIncaCala(){
    console.log("Enviar Informacion");
  }
}
