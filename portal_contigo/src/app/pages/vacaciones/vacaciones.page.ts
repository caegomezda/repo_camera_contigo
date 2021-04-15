import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacaciones',
  templateUrl: './vacaciones.page.html',
  styleUrls: ['./vacaciones.page.scss'],
})
export class VacacionesPage implements OnInit {
  aprobForm = {
  }
  constructor() { }

  ngOnInit() {
  }

  async eviarSolicitudVacaciones(){
    // await this.formMaker();
    // if(this.aprobForm.Estado === "empty"){
    //   this.alertMeController("reject_Estado")
    // }else if(this.aprobForm.Estado === "REDIRECCIONADO" && this.aprobForm.Redireccionar === "empty"){
    //   this.alertMeController("reject_Redirect")
    // }else{
    //   this.aprobForm['Tipo'] ="2";
    //   this.aprobForm['Pusuario'] = this.infoUsuario;
    //   this.aprobForm['Codigo'] =this.aprobacionesDetalle.Codigo;
    //   this.gestionada.enviarGestionar(this.aprobForm);
    //   this.alertMeController("succes")
    // }
  }

  async formMaker(){
    // let result= await this.storage.sendInfoUsuario();
    // this.infoUsuario = result[1].value.Pusuario
  }

  async alertMeController(estado){
    // if (estado === "reject_Estado") {
    //   const alert = await this.alertController.create({
    //     subHeader: 'Por favor seleccione el campo Estado',
    //     message: 'Agregue la opcion Estado en el formulario',
    //     buttons: ['OK']
    //   });
  
    //   await alert.present();
    // }else if(estado === "reject_Redirect"){
    //   const alert = await this.alertController.create({
    //     subHeader: 'Por favor seleccione el campo Redireccionar',
    //     message: 'Agregue la la iocuion de redireccionamiento  en el formulario',
    //     buttons: ['OK']
    //   });
  
    //   await alert.present();
    // }
    // else if(estado ==="succes"){
    //   const alert = await this.alertController.create({
    //     subHeader: 'Solicitud Gestionada',
    //     message: '',
    //     buttons: [
    //       {
    //         text: 'OK',
    //         handler: () => {
    //           this.router.navigate(['/aprobaciones']);
    //         }
    //       }
    //     ]
    //   });
    //   await alert.present();
    // }
  }

}
