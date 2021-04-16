import { Component, OnInit } from '@angular/core';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-citas-detalle',
  templateUrl: './citas-detalle.page.html',
  styleUrls: ['./citas-detalle.page.scss'],
})
export class CitasDetallePage implements OnInit {
  cita:any;
  constructor(private storage : TemporalMovilStoreService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getCitaInfo();
  }

  async getCitaInfo(){
    this.cita = await this.storage.sendInfoCitas()
    console.log("this.nombreSolicitud",this.cita);
  }

  enviarAuxConvencionales(){
    console.log("Enviar Informacion");
  }

  enviarInfoCitas(nCitas){
    console.log("Informacion Citas", nCitas);
  }
}
