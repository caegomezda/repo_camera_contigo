import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-nivel-endeudamiento',
  templateUrl: './nivel-endeudamiento.page.html',
  styleUrls: ['./nivel-endeudamiento.page.scss'],
})
export class NivelEndeudamientoPage implements OnInit {

  infoUsuario :any;
  listaInfoEndeundamiento:any;
  isLoad:Boolean = false
  constructor(private consulta : ConsultasService,
              private storage : TemporalMovilStoreService) { }

  ngOnInit() {
    this.infoUsuario =  this.storage.sendInfoUsuario();
  }

  ionViewWillEnter(){
    console.log("this.infoUsu",this.infoUsuario)
    this.listaEndeudamiento();
  }

  async listaEndeudamiento(){
    let newForm = {
      Tipo : "6",
      Pusuario : this.infoUsuario[1].value.Pusuario
    };
    let result = await this.consulta.listaConsultas(newForm);
    this.listaInfoEndeundamiento = result['ListaParametros'];
    this.isLoad = true;
    console.log("this.lisasInfo",this.listaInfoEndeundamiento);
  }

}
