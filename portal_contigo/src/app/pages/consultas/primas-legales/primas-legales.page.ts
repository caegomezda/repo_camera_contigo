import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-primas-legales',
  templateUrl: './primas-legales.page.html',
  styleUrls: ['./primas-legales.page.scss'],
})
export class PrimasLegalesPage implements OnInit {
  infoUsuario :any;
  listaInfoPrimas:any;
  isLoad:Boolean = false
  constructor(private consulta : ConsultasService,
              private storage : TemporalMovilStoreService) { }

  ngOnInit() {
    this.infoUsuario =  this.storage.sendInfoUsuario();
  }

  ionViewWillEnter(){
    console.log("this.infoUsu",this.infoUsuario)
    this.listaPrimas();
  }

  async listaPrimas(){
    let newForm = {
      Tipo : "1",
      Pusuario : this.infoUsuario[1].value.Pusuario
    };
    let result = await this.consulta.listaConsultas(newForm);
    this.listaInfoPrimas = result['ListaParametros'];
    this.isLoad = true;
    console.log("this.lisasInfo",this.listaInfoPrimas);
  }
}
