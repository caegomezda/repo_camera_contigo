import { RecursiveTemplateAstVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../../services/solicitudes.service';
import { TemporalMovilStoreService } from '../../services/temporal-movil-store.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-mis-pendientes',
  templateUrl: './mis-pendientes.page.html',
  styleUrls: ['./mis-pendientes.page.scss'],
})
export class MisPendientesPage implements OnInit {

  infoUsuario:any;
  listaInfoSolicitudes:any;
  isLoad:boolean = false;

  constructor(private solicitudes : SolicitudesService,
              private storage: TemporalMovilStoreService,
              private router: Router){ 

  }

  ngOnInit() {
    this.callInfoUsuario();
  }

  ionViewWillEnter(){
    this.listaMisPendiente();
  }

  async listaMisPendiente(){
    let newForm = {
      Pusuario : this.infoUsuario.value.Pusuario,
      Tipo : "1"
    }
    
    let result = await this.solicitudes.listaSolicitudes(newForm);
    this.isLoad = true
    this.listaInfoSolicitudes = result['ListaParametros'];
  }

  async callInfoUsuario(){
    let result = await this.storage.sendInfoUsuario();
    this.infoUsuario = result[1];
  }

  onClickItem(solicitudes){
    this.storage.getInfoListSolicitudDetalle(solicitudes);
    this.router.navigate(['/mis-pendientes-detalle']);
  }

}
