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
    let result = await this.solicitudes.listaSolicitudes(this.infoUsuario.value.Pusuario,"2");
    this.isLoad = true

    this.listaInfoAprobaciones = result['ListaParametros']
    console.log("this.listaAprobaciones",this.listaInfoAprobaciones);
  }

  async callInfoUsuario(){
    let result = await this.storage.sendInfoUsuario();
    console.log("result en call info Usuario",result[1]);
    this.infoUsuario = result[1];
  }

  aprobacionesDetalle(solicitudes){
    console.log("Solicitudes",solicitudes);
    this.storage.getInfoListAprobacionesDetalle(solicitudes);
    this.router.navigate(['aprobaciones-detalle']);

  }
}
