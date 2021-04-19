import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  constructor(public formBuilder: FormBuilder ) {

  }

  ngOnInit() {
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
  

}
