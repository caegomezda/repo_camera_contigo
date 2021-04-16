import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-reporte-nomina',
  templateUrl: './reporte-nomina.page.html',
  styleUrls: ['./reporte-nomina.page.scss'],
})
export class ReporteNominaPage implements OnInit {
  infoNomina:any = "Esta es la Info Nomina " 
  constructor(private storage : TemporalMovilStoreService,
              private router : Router

  ) { }

  ngOnInit() {
  }

  solicitudInforma(){
    console.log("Solicitudes Informacion")
    this.storage.getNombreSolicitud("Solicitud Informacion");
    this.storage.getInfoNomina(this.infoNomina);
    this.router.navigate(['/nomina-detalle']);
  }

  sendNombresolicitud(){
    this.storage.getNombreSolicitud("Solicitud Informacion");
  }
  
  otrasSolicitudesReclamos(){
    console.log("Otras solicitudes o Reclamos");
    this.storage.getNombreSolicitud("Otras Solicitudes y/o Reclamos");
    this.storage.getInfoNomina(this.infoNomina);
    this.router.navigate(['/nomina-detalle']);
  }
}
