import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/services/sesion.service';
import { SolicitudesService } from 'src/app/services/solicitudes.service';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-aprobaciones',
  templateUrl: './aprobaciones.page.html',
  styleUrls: ['./aprobaciones.page.scss'],
})
export class AprobacionesPage implements OnInit {
  infoUsuario:any
  listaInfoAprobaciones:any
  isLoad:boolean = false;

  constructor(private solicitudes: SolicitudesService,
              private storage: TemporalMovilStoreService,
              private router: Router,
              private sesion : SesionService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.callInfoUsuario();
  }

  async ListaAprobaciones(){
    let newForm = {
      Pusuario: this.infoUsuario,
      Tipo: "2"
    }
    let result = await this.solicitudes.listaSolicitudes(newForm);
    this.isLoad = true
    this.listaInfoAprobaciones = result['ListaParametros']
  }

  async callInfoUsuario(){
    let result= await this.storage.sendInfoUsuario();
    if (result) {
      this.infoUsuario = result[1].value.Pusuario
      this.ListaAprobaciones();
    }else{
      this.sesion.sesionVerificator();
    }
  }

  aprobacionesDetalle(solicitudes){
    this.storage.getInfoListAprobacionesDetalle(solicitudes);
    this.router.navigate(['aprobaciones-detalle']);

  }
}
