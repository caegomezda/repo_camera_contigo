import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-historial-permisos',
  templateUrl: './historial-permisos.page.html',
  styleUrls: ['./historial-permisos.page.scss'],
})
export class HistorialPermisosPage implements OnInit {
  infoUsuario :any;
  listaInfoPermisos:any;
  Permisos:any;
  isLoad:Boolean = false
  constructor(private consulta : ConsultasService,
              private storage : TemporalMovilStoreService) { }

  ngOnInit() {
    this.infoUsuario =  this.storage.sendInfoUsuario();
  }

  ionViewWillEnter(){
    console.log("this.infoUsu",this.infoUsuario)
    this.listaPermisos();
  }

  async listaPermisos(){
    let newForm = {
      Tipo : "4",
      Pusuario : this.infoUsuario[1].value.Pusuario
    };
    let result = await this.consulta.listaConsultas(newForm);
    this.isLoad = true;
    this.listaInfoPermisos = result['ListaParametros'];
    this.Permisos = this.listaInfoPermisos['Permisos'];
    console.log("this.lisasInfo",this.listaInfoPermisos);
  }

}
