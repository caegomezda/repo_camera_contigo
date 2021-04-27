import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SesionService } from 'src/app/services/sesion.service';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.page.html',
  styleUrls: ['./cambiar-contrasena.page.scss'],
})
export class CambiarContrasenaPage implements OnInit {

  passwordForm = {
    claveAnterior : "",
    claveNueva: "",
    reClaveNueva:"",
  }
  @ViewChild('passwordEyeRegister', { read: ElementRef }) passwordEye: ElementRef;

  passwordTypeInput_1  =  'password';
  passwordTypeInput_2  =  'password';
  passwordTypeInput_3  =  'password';
  iconpassword  =  'eye-off';
  infoUsuario:any;

  constructor(private formBuilder: FormBuilder,
              private storage : TemporalMovilStoreService,
              private sesion : SesionService ) {

  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.callInfoUsuario();
  }

  rPassword(){
  console.log("this.passwordForm",this.passwordForm);
  }

  togglePasswordMode(nPasswaord) {
    if (nPasswaord === 1) {
      this.passwordTypeInput_1 = this.passwordTypeInput_1 === 'text' ? 'password' : 'text';
    }else if (nPasswaord === 2) {
      this.passwordTypeInput_2 = this.passwordTypeInput_2 === 'text' ? 'password' : 'text';
    }else if (nPasswaord === 3) {
      this.passwordTypeInput_3 = this.passwordTypeInput_3 === 'text' ? 'password' : 'text';
    }
  }

  async callInfoUsuario(){
    let result= await this.storage.sendInfoUsuario();
    if (result) {
      this.infoUsuario = result[1].value.Pusuario
    }else{
      this.sesion.sesionVerificator();
    }
  }
  

}
