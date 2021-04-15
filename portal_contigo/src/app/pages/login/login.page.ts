import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // loginForm  = {
  //   Pusuario:"",
  //   Ppassword:"",
  // }
  loginForm:FormGroup

  @ViewChild('passwordEyeRegister', { read: ElementRef }) passwordEye: ElementRef;
  passwordTypeInput  =  'password';
  iconpassword  =  'eye-off';

  constructor(private formBuilder: FormBuilder,
              private auth: AuthService,
              private storeUsuInfo: TemporalMovilStoreService,
              private loadingController: LoadingController,
              private router:Router,
              private alertController : AlertController,
              private fb:FormBuilder,
  ){
    this.loginForm = this.fb.group({
      Pusuario:['',[Validators.required]],
      Ppassword:['',[Validators.required]],
    })
  }

  ngOnInit() {
  }


  async auntenticar(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Autenticando...',
      duration: 2000
    });

    await loading.present();
    let result = await this.auth.login(this.loginForm.value);
    this.storeUsuInfo.getInfoUsuario(result,this.loginForm);
    if (result['Estado'] === false) {
      await loading.onDidDismiss();
      const alert = await this.alertController.create({
        // header: 'Alert',
        subHeader: 'Error al autenticar',
        message: 'Error al auntenticar, revise su contraseña o su usuario',
        buttons: ['OK']
      });
      await alert.present();
    }else{
      await loading.onDidDismiss();
      this.router.navigate(['/menu']);
    }
  }

  rPassword(){
    console.log("recuperar contraseña")
  }

  submitForm(){
    console.log("On Submit")
  }

  togglePasswordMode() {
    this.passwordTypeInput = this.passwordTypeInput === 'text' ? 'password' : 'text';
    const nativeEl = this.passwordEye.nativeElement.querySelector('input');
    const inputSelection = nativeEl.selectionStart;
    nativeEl.focus();
    setTimeout(() => {
        nativeEl.setSelectionRange(inputSelection, inputSelection);
    }, 1);
  }

}
