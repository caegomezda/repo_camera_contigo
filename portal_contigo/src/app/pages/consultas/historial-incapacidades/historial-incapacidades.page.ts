import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-historial-incapacidades',
  templateUrl: './historial-incapacidades.page.html',
  styleUrls: ['./historial-incapacidades.page.scss'],
})
export class HistorialIncapacidadesPage implements OnInit {
  infoUsuario :any;
  listaInfoIncapacidades:any;
  Incapacidades:any;
  isLoad:Boolean = false
  constructor(private consulta : ConsultasService,
              private storage : TemporalMovilStoreService) { }

  ngOnInit() {
    this.infoUsuario =  this.storage.sendInfoUsuario();
  }

  ionViewWillEnter(){
    console.log("this.infoUsu",this.infoUsuario)
    this.listaIncapacidades();
  }

  async listaIncapacidades(){
    let newForm = {
      Tipo : "5",
      Pusuario : this.infoUsuario[1].value.Pusuario
    };
    let result = await this.consulta.listaConsultas(newForm);
    this.isLoad = true;
    this.listaInfoIncapacidades = result['ListaParametros'];
    this.Incapacidades = this.listaInfoIncapacidades['Incapacidades'];
    console.log("this.lisasInfo",this.listaInfoIncapacidades);
  }

}
