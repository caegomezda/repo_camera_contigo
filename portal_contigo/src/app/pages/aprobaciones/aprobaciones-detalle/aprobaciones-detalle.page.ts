import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';
import { ParametrosService } from 'src/app/services/parametros.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { SolicitudesService } from 'src/app/services/solicitudes.service';
import { SesionService } from 'src/app/services/sesion.service';


@Component({
  selector: 'app-aprobaciones-detalle',
  templateUrl: './aprobaciones-detalle.page.html',
  styleUrls: ['./aprobaciones-detalle.page.scss'],
})
export class AprobacionesDetallePage implements OnInit {

  aprobacionesDetalle:any;
  listadoEstadosParametros:any;
  listadoEstadosParametrosArreglo:any;
  isLoad = false;
  isEstadoRedireccionar = false;
  infoUsuario:any;
  listadoParametrosUsuarios:any;
  aprobForm = {
    Estado:"empty",
    Respuesta:"",
    Tipo:"",
    Pusuario:"",
    Codigo:"",
    Redireccionar:"empty"
  }

  constructor(private storage: TemporalMovilStoreService,
              private router: Router,
              private parametros: ParametrosService,
              private alertController : AlertController,
              private solicitudes : SolicitudesService,
              private sesion : SesionService
  ){}

  ngOnInit() {
  }
  
  ionViewWillEnter(){
    this.callInfoUsuario();
  }

  async getListAprobacionesDetalle(){
    this.listadoEstadosParametrosArreglo = []
    let result = await this.storage.sendInfoListAprobacionesDetalle();
    let form = {
      Tipo: "1"
    }
    let resultParametros = await this.parametros.listaParametros(form);
    this.listadoEstadosParametros = resultParametros['ListaParametros'];
    for (let index = 0; index < this.listadoEstadosParametros.length; index++) {
      this.listadoEstadosParametrosArreglo.push(this.listadoEstadosParametros[index]['Nombre'])
    }
    this.aprobacionesDetalle = result;
    this.isLoad = true;
  }

  enviarAprobaciones(){
    if(this.aprobForm.Estado === "empty"){
      this.alertMeController("reject_Estado")
    }else if(this.aprobForm.Estado === "REDIRECCIONADO" && this.aprobForm.Redireccionar === "empty"){
      this.alertMeController("reject_Redirect")
    }else{
      this.aprobForm['Tipo'] ="3";
      this.aprobForm['Pusuario'] = this.infoUsuario;
      this.aprobForm['Codigo'] =this.aprobacionesDetalle.Codigo;
      this.solicitudes.listaSolicitudes(this.aprobForm);
      this.alertMeController("succes")
    }
  }

  async sesionVerificator(){
    let result = await this.sesion.sesion(this.infoUsuario);
    if (!result) {
      this.router.navigate(['/login'])
    }
  }

  async callInfoUsuario(){
    let result= await this.storage.sendInfoUsuario();
    if (result) {
      this.infoUsuario = result[1].value.Pusuario
      this.getListAprobacionesDetalle();
    }else{
      this.sesionVerificator();
    }

  }

  async alertMeController(estado){
    if (estado === "reject_Estado") {
      const alert = await this.alertController.create({
        subHeader: 'Por favor seleccione el campo Estado',
        message: 'Agregue la opcion Estado en el formulario',
        buttons: ['OK']
      });
  
      await alert.present();
    }else if(estado === "reject_Redirect"){
      const alert = await this.alertController.create({
        subHeader: 'Por favor seleccione el campo Redireccionar',
        message: 'Agregue la la iocuion de redireccionamiento  en el formulario',
        buttons: ['OK']
      });
  
      await alert.present();
    }
    else if(estado ==="succes"){
      const alert = await this.alertController.create({
        subHeader: 'Solicitud Gestionada',
        message: '',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.router.navigate(['/aprobaciones']);
            }
          }
        ]
      });
      await alert.present();
    }
  }

  async changeEstadoListener(value){
    this.aprobForm['Redireccionar'] = value
    if(value === "REDIRECCIONADO"){
      // let form = {
      //   Tipo: "2"
      // }
      // let resultParametrosUsuarios = await this.parametros.listaParametros(form);
      // this.listadoParametrosUsuarios = resultParametrosUsuarios['ListaParametros']
      this.isEstadoRedireccionar = true
    }else{
      this.isEstadoRedireccionar = false
    }
  }
}
