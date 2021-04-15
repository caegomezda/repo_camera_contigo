import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';
import { VacacionesService } from 'src/app/services/vacaciones.service';

@Component({
  selector: 'app-vacaciones',
  templateUrl: './vacaciones.page.html',
  styleUrls: ['./vacaciones.page.scss'],
})
export class VacacionesPage implements OnInit {
  aprobForm ={
    Tipo:"",
    Pusuario:"",
    FechaSolicitud:"",
    DiaSolicitud:"empty"
  }
  infoUsuario:any;
  listaInfoVacaciones:any;
  isLoad:Boolean = false;
  dia:any;
  mes:any;
  year:any;
  fechaInfo:any;
  isDateLoad: Boolean = false;
  constructor(private storage : TemporalMovilStoreService,
              private vacaciones :VacacionesService,
              private alertController : AlertController,
              private router : Router
              ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.listaVacaciones();
    this.fechaInfo = this.storage.fechaHoy(1)
    
    console.log("fecha info ", this.fechaInfo);
    this.aprobForm['FechaSolicitud'] = this.fechaInfo
    this.isDateLoad = true

  }

  async listaVacaciones(){
    await this.formMaker();
    let newForm = {
      Pusuario: this.infoUsuario,
      Tipo: "1"
    }
    let result = await this.vacaciones.listaVacaciones(newForm);
    this.listaInfoVacaciones = result["ListaParametros"][0];
    this.isLoad = true
    console.log("this.listaInfoVacaciones",this.listaInfoVacaciones)

  }

  async eviarSolicitudVacaciones(){
    await this.formMaker();
    let result = await this.diasComparador()

    if(this.aprobForm.DiaSolicitud === "empty"){
      this.alertMeController("reject_diasDisp")
    }
    // else if(this.aprobForm.FechaSolicitud === "empty"){
    //   this.alertMeController("reject_FechaSol")
    // }
    else if (!result) {
      this.alertMeController("reject_ComparadorDias")
    }else{
      this.aprobForm['Tipo'] ="2";
      this.aprobForm['Pusuario'] = this.infoUsuario;
      console.log("this.aproForm",this.aprobForm)
      // this.vacaciones.listaVacaciones(this.aprobForm);
      this.alertMeController("succes")
    }
  }

  async formMaker(){
    let result= await this.storage.sendInfoUsuario();
    this.infoUsuario = result[1].value.Pusuario
  }

  diasComparador(){
    let diasDisponibles = this.listaInfoVacaciones.CantDias
    let diasTomados = this.aprobForm.DiaSolicitud
    diasDisponibles = parseInt(diasDisponibles)
    if (diasDisponibles >= diasTomados) {
      return true
    }else{
      return false
    }

  }

  async alertMeController(estado){
    if (estado === "reject_diasDisp") {
      const alert = await this.alertController.create({
        subHeader: 'Por favor seleccione el numero de dias',
        message: 'Agregue el numero de dias en el formulario',
        buttons: ['OK']
      });
  
      await alert.present();
    }
    // else if(estado === "reject_FechaSol"){
    //   const alert = await this.alertController.create({
    //     subHeader: 'Por favor seleccione la fecha de inicio',
    //     message: 'Agregue la fecha de inicio en el formulario',
    //     buttons: ['OK']
    //  });
  
    //   await alert.present();
    // }
    else if(estado === "reject_ComparadorDias"){
      const alert = await this.alertController.create({
        subHeader: 'No se pude generar la solicitud',
        message: 'Verifique los dias solicitados, superan los dias disponibles',
        buttons: ['OK']
     });
  
      await alert.present();
    }else if(estado ==="succes"){
      const alert = await this.alertController.create({
        subHeader: 'Solicitud Gestionada',
        message: '',
        buttons: [
          {
            text: 'OK',
            // handler: () => {
            //   this.router.navigate(['/menu']);
            // }
          }
        ]
      });
      await alert.present();
    }
  }

}
