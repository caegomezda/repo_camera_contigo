import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/services/sesion.service';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-certificado-laboral',
  templateUrl: './certificado-laboral.page.html',
  styleUrls: ['./certificado-laboral.page.scss'],
})
export class CertificadoLaboralPage implements OnInit {

  infoUsuario:any;

  constructor(private storage: TemporalMovilStoreService,
              private sesion: SesionService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.callInfoUsuario();
  }

  conSalarioAdiciones(){
    console.log("con salario adiciones");
  }

  sinSalario(){
    console.log("sin salario");
  }

  conSalario(){
    console.log("con salario");
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
