import { Component, OnInit } from '@angular/core';
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

  constructor(public formBuilder: FormBuilder ) {

  }

  ngOnInit() {
  }

  rPassword(){
  console.log("this.passwordForm",this.passwordForm);
  }
}
