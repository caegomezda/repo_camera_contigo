import { Component, OnInit } from '@angular/core';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-camara-page',
  templateUrl: './camara-page.page.html',
  styleUrls: ['./camara-page.page.scss'],
})
export class CamaraPagePage implements OnInit {
  nombreSolicitud:any
  constructor(private storage: TemporalMovilStoreService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getNombreSolicitud();
  }
  
  adjuntarFoto(){
    console.log("Adjuntar Foto")
  }

  eliminarFotoEnLista(){
    console.log("Eliminar Foto Lista")
  }

  abrirCamara(){
    console.log("Abrir Camara")
  }

  async getNombreSolicitud(){
    this.nombreSolicitud = await this.storage.sendNombresolicitud()
    console.log("this.nombreSolicitud",this.nombreSolicitud);
  }
}
