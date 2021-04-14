import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';
import { ParametrosService } from 'src/app/services/parametros.service';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { GestionadoService } from 'src/app/services/gestionado.service';


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
  isEstadoRedireccionar = false
  infoUsuario:any
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
              private gestionada : GestionadoService,
  ){}

  ngOnInit() {
    console.log("mis aprobaciones detalle");
  }
  
  ionViewWillEnter(){
    this.getListAprobacionesDetalle()
    // this.aprobForm.Estado = "empty"
    // this.aprobForm.Redireccionar = "empty"

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
  }

  async enviarAprobaciones(){
    await this.formMaker();
    if(this.aprobForm.Estado === "empty"){
      this.alertMeController("reject_Estado")
    }else if(this.aprobForm.Estado === "REDIRECCIONADO" && this.aprobForm.Redireccionar === "empty"){
      this.alertMeController("reject_Redirect")
    }else{
      this.aprobForm['Tipo'] ="2";
      this.aprobForm['Pusuario'] = this.infoUsuario;
      this.aprobForm['Codigo'] =this.aprobacionesDetalle.Codigo;
      this.gestionada.enviarGestionar(this.aprobForm);
      this.alertMeController("succes")
    }
  }

  async formMaker(){
    let result= await this.storage.sendInfoUsuario();
    this.infoUsuario = result[1].value.Pusuario
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

  changeEstadoListener(value){
    console.log("value",value)
    console.log("parametros",value)
    this.aprobForm['Redireccionar'] = value

    if(value === "REDIRECCIONADO"){
      this.isEstadoRedireccionar = true
    }else{
      this.isEstadoRedireccionar = false
    }
  }
}
