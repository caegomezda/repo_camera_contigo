import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';
import { ParametrosService } from 'src/app/services/parametros.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-aprobaciones-detalle',
  templateUrl: './aprobaciones-detalle.page.html',
  styleUrls: ['./aprobaciones-detalle.page.scss'],
})
export class AprobacionesDetallePage implements OnInit {
  aprobacionesDetalle:any
  listadoEstadosParametros:any
  listadoEstadosParametrosArreglo:any
  isLoad = false
  infoUsuario:any
  aprobForm = {}


  constructor(private storage: TemporalMovilStoreService,
              private router: Router,
              private parametros: ParametrosService) { }

  ngOnInit() {
    console.log("mis pendientes detalle");
    this.getListAprobacionesDetalle()
  }

  async getListAprobacionesDetalle(){
    this.listadoEstadosParametrosArreglo = []
    let result = await this.storage.sendInfoListAprobacionesDetalle();
    let resultParametros = await this.parametros.listaParametros("1");
    this.listadoEstadosParametros = resultParametros['ListaParametros'];

    for (let index = 0; index < this.listadoEstadosParametros.length; index++) {
      this.listadoEstadosParametrosArreglo.push(this.listadoEstadosParametros[index]['Nombre'])
    }

    this.aprobacionesDetalle = result;
    this.isLoad = true;
    console.log("listadoEstadosParametrosArreglo",this.listadoEstadosParametrosArreglo)
    console.log("this.listadoEstadosParametros",this.listadoEstadosParametros)
    console.log("this.aprobacionesDetalle",this.aprobacionesDetalle);
  }

  enviarAprobaciones(){
    this.formMaker();
    console.log("Aprobaciones envida");

    this.aprobForm['Tipo'] ="2";
    this.aprobForm['Pusuario'] =this.infoUsuario;
    this.aprobForm['Codigo'] =this.aprobacionesDetalle.Codigo;

    // this.Tipo = "2"
    // let Tipo = new FormControl('2');
    // let Ppusuario = new FormControl(this.infoUsuario);
    // let Codigo = new FormControl(this.aprobacionesDetalle.Codigo);
    console.log("form ___________:",this.aprobForm)
    console.log("this.aprobacionesForm",this.aprobForm)
  }

  async formMaker(){
    let result= await this.storage.sendInfoUsuario();
    this.infoUsuario = result[1]
    console.log("this.infoUsuario",this.infoUsuario);
    
  }
}
