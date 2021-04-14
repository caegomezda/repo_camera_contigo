import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';
import { ParametrosService } from 'src/app/services/parametros.service';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';


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
  aprobForm = {
    Estado:"",
    Respuesta:"",
    Tipo:"",
    Pusuario:"",
    Codigo:""
  }


  constructor(private storage: TemporalMovilStoreService,
              private router: Router,
              private parametros: ParametrosService,
              private fb:FormBuilder,
              private loadingController: LoadingController,
              private alertController : AlertController,
  ){}

  ngOnInit() {
    console.log("mis pendientes detalle");
  }
  
  ionViewWillEnter(){
    this.getListAprobacionesDetalle()
    this.aprobForm.Estado = "empty"
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
    // console.log("listadoEstadosParametrosArreglo",this.listadoEstadosParametrosArreglo)
    // console.log("this.listadoEstadosParametros",this.listadoEstadosParametros)
    // console.log("this.aprobacionesDetalle",this.aprobacionesDetalle);
  }

  async enviarAprobaciones(){
    this.formMaker();
    console.log("this.aprobForm",this.aprobForm)

    console.log("this.aprobForm['Estado']",this.aprobForm.Estado)

    if(this.aprobForm.Estado === "empty"){
      console.log("dentro del If")
      console.log("saliendo del loading")
      this.alertMeController("reject")

    }else{
      console.log("dentro del else")
      console.log('Loading dismissed!');
      this.aprobForm['Tipo'] ="2";
      this.aprobForm['Pusuario'] =this.infoUsuario;
      this.aprobForm['Codigo'] =this.aprobacionesDetalle.Codigo;
      console.log("this.aprobacionesForm",this.aprobForm);
      this.alertMeController("succes")

      // this.router.navigate(['/aprobaciones']);

    }
  }

  async formMaker(){
    let result= await this.storage.sendInfoUsuario();
    this.infoUsuario = result[1].value.Pusuario
    // console.log("this.infoUsuario",this.infoUsuario);
  }

  async alertMeController(estado){
    console.log("entrado al alert")
    if (estado === "reject") {
      const alert = await this.alertController.create({
        // header: 'Alert',
        subHeader: 'Por favor seleccione el campo Estado',
        message: 'Agregue la opcion Estado en el formulario',
        buttons: ['OK']
      });
  
      await alert.present();
    }else if(estado ==="succes"){
      const alert = await this.alertController.create({
        // header: 'Alert',
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

}
