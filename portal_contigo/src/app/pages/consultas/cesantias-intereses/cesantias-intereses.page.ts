import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-cesantias-intereses',
  templateUrl: './cesantias-intereses.page.html',
  styleUrls: ['./cesantias-intereses.page.scss'],
})
export class CesantiasInteresesPage implements OnInit {
  infoUsuario :any;
  listaInfoCesantias:any;
  isLoad:Boolean = false
  constructor(private consulta : ConsultasService,
              private storage : TemporalMovilStoreService) { }

  ngOnInit() {
    this.infoUsuario =  this.storage.sendInfoUsuario();
  }

  ionViewWillEnter(){
    console.log("this.infoUsu",this.infoUsuario)
    this.listaCesantias();
  }

  async listaCesantias(){
    let newForm = {
      Tipo : "3",
      Pusuario : this.infoUsuario[1].value.Pusuario
    };
    let result = await this.consulta.listaConsultas(newForm);
    this.isLoad = true;
    this.listaInfoCesantias = result['ListaParametros'];
    console.log("this.lisasInfo",this.listaInfoCesantias);
  }

}
