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
  listaSolicitudes:any;
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
    let result = await this.solicitudes.listaMisPendientes(this.infoUsuario.value.Pusuario,"1");
    this.isLoad = true
    console.log("result lista mis pendientes",result);
    this.listaSolicitudes = result['ListaParametros'];
    console.log("this.listaSolicitudes",this.listaSolicitudes);
  }

  async callInfoUsuario(){
    let result = await this.storage.sendInfoUsuario();
    console.log("result en call info Usuario",result[1]);
    this.infoUsuario = result[1];
  }

  onClickItem(solicitudes){
    console.log("ITEM CLICK");
    console.log(solicitudes)
    this.storage.getInfoListSolicitudDetalle(solicitudes);
    this.router.navigate(['/mis-pendientes-detalle']);
  }

}
