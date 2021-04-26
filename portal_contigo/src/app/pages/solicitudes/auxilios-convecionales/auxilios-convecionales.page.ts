import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuxilosService } from 'src/app/services/auxilos.service';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-auxilios-convecionales',
  templateUrl: './auxilios-convecionales.page.html',
  styleUrls: ['./auxilios-convecionales.page.scss'],
})
export class AuxiliosConvecionalesPage implements OnInit {
  listaAuxilios:any;
  infoUsuario:any;
  isLoad:Boolean = false;
  aprobForm = {
    Auxilio:"",
    Tipo:"",
    Pusuario:"",
    Respuesta:"",
    Fotos:""
  }
  constructor(private router : Router,
              private storage: TemporalMovilStoreService,
              private auxilios: AuxilosService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getListaAuxilios();
  }

  tomarFoto(){
    console.log("Tomar foto");
    this.storage.getNombreSolicitud("Auxilios Convencionales");
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

  async getListaAuxilios(){
    this.infoUsuario = await this.storage.sendInfoUsuario()
    let form = {
      Pusuario: this.infoUsuario[1].value.Pusuario,
      Tipo: "1"
    }
    let result = await this.auxilios.listaAuxilios(form);
    this.listaAuxilios = result['ListaParametros'];
    this.isLoad = true;
  }
  
}
