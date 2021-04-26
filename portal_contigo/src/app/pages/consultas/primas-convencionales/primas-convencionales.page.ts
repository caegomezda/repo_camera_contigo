import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-primas-convencionales',
  templateUrl: './primas-convencionales.page.html',
  styleUrls: ['./primas-convencionales.page.scss'],
})
export class PrimasConvencionalesPage implements OnInit {
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
      Tipo : "2",
      Pusuario : this.infoUsuario[1].value.Pusuario
    };
    let result = await this.consulta.listaConsultas(newForm);
    this.isLoad = true;
    this.listaInfoPrimas = result['ListaParametros'];
    console.log("this.lisasInfo",this.listaInfoPrimas);
  }
}
