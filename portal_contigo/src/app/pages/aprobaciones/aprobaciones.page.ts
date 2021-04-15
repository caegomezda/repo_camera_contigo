import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
              private router: Router) { }

  ngOnInit() {
    this.callInfoUsuario();
  }

  ionViewWillEnter(){
    this.ListaAprobaciones();
  }

  async ListaAprobaciones(){
    let newForm = {
      Pusuario: this.infoUsuario.value.Pusuario,
      Tipo: "2"
    }
    let result = await this.solicitudes.listaSolicitudes(newForm);
    this.isLoad = true
    this.listaInfoAprobaciones = result['ListaParametros']
  }

  async callInfoUsuario(){
    let result = await this.storage.sendInfoUsuario();
    this.infoUsuario = result[1];
  }

  aprobacionesDetalle(solicitudes){
    this.storage.getInfoListAprobacionesDetalle(solicitudes);
    this.router.navigate(['aprobaciones-detalle']);

  }
}
