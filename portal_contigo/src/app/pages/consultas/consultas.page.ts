import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  comprobanteDePago(){
    console.log("comprobanteDePago");
    this.router.navigate(['/comprobante-pago']);
  }
  certificadoLaboral(){
    console.log("certificadoLaboral");
    this.router.navigate(['/certificado-laboral']);
  }
  primasLegales(){
    console.log("primasLegales");
    this.router.navigate(['/primas-legales']);
  }
  primasConvecionales(){
    console.log("primasConvecionales");
    this.router.navigate(['/primas-convencionales']);
  }
  cesantiasEIntereses(){
    console.log("cesantiasEIntereses");
    this.router.navigate(['/cesantias-intereses']);
  }
  miHistorialDePemisos(){
    console.log("miHistorialDePemisos");
    this.router.navigate(['/historial-permisos']);
  }
  mihistorialDeIncapacidad(){
    console.log("mihistorialDeIncapacidad");
    this.router.navigate(['/historial-incapacidades']);
  }
  miNivelDeEndeundamiento(){
    console.log("miNivelDeEndeundamiento");
    this.router.navigate(['/nivel-endeudamiento']);
  }
}
