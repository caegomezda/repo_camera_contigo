import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Key } from 'selenium-webdriver';
import { CitasService } from 'src/app/services/citas.service';
import { SesionService } from 'src/app/services/sesion.service';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-citas-presenciales',
  templateUrl: './citas-presenciales.page.html',
  styleUrls: ['./citas-presenciales.page.scss'],
})
export class CitasPresencialesPage implements OnInit {
  doctoresCitas = ['doctora1','doctor1','doctor2','doctora2','doctor3','doctora3','doctora4']
  infoCitas:any;
  infoUsuario:any;
  arregloB64Img:any =[];
  arregloConImg:any = [];
  dict:any=[];
  isLoad:Boolean = false
  picImage:any;

  constructor(private router : Router,
              private storage : TemporalMovilStoreService,
              private listacitas : CitasService,
              private sesion : SesionService,

  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.callInfoUsuario()
  }

  citasDetalles(cita){
    console.log("Cita Detalles",cita);
    this.storage.getInfoCitas(cita);
    this.router.navigate(['/citas-detalle']);
  }

  async listaCitas(){
    let newForm = {
      Tipo : "1"
    }
    let result = await this.listacitas.listaCitas(newForm);
    console.log("result",result);
    this.infoCitas = result;
    await this.arrayImgBase64();
  }

  async callInfoUsuario(){
    let result= await this.storage.sendInfoUsuario();
    if (result) {
      this.infoUsuario = result[1].value.Pusuario;
      this.listaCitas()
    }else{
      this.sesion.sesionVerificator();
    }
  }

  async arrayImgBase64(){
    let arrayB64 = await this.infoCitas['ListaParametros'];
    arrayB64.forEach(element => {
      this.arregloB64Img.push(element.Img);
    });
    this.arrayConvB64();
  }

  arrayConvB64(){
    let count = 0;
    this.arregloB64Img.forEach((imageData)=> {
      let base64Data=imageData;
      this.dict[`converted_image${count}`] = "data:image/jpeg;base64,"+ base64Data;
      count++
    });
    console.log("dict",this.dict);
    this.isLoad = true;
    this.picImage = this.dict[0];
  }


}
