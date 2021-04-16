import { Component, OnInit } from '@angular/core';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-comprobante-pago',
  templateUrl: './comprobante-pago.page.html',
  styleUrls: ['./comprobante-pago.page.scss'],
})
export class ComprobantePagoPage implements OnInit {
  fechaInfo:any
  constructor(private storage: TemporalMovilStoreService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.fechaInfo = this.storage.fechaHoy(0)
    this.fechaInfo = this.fechaInfo.slice(0,10)
    console.log("fecha info ", this.fechaInfo);
  }

  generarDocumento(){
    console.log("Generar certificado");
  }
}
