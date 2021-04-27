import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/services/sesion.service';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-camara-page',
  templateUrl: './camara-page.page.html',
  styleUrls: ['./camara-page.page.scss'],
})
export class CamaraPagePage implements OnInit {
  nombreSolicitud:any;
  infoUsuario:any;
  constructor(private storage: TemporalMovilStoreService,
              private sesion : SesionService,
              private router : Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.callInfoUsuario()
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
  }

  async callInfoUsuario(){
    let result= await this.storage.sendInfoUsuario();
    if (result) {
      this.infoUsuario = result[1].value.Pusuario
    }else{
      this.sesion.sesionVerificator();
    }
  }

}
