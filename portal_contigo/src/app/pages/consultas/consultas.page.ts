import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  comprobanteDePago(){
    console.log("comprobanteDePago")
  }
  certificadoLaboral(){
    console.log("certificadoLaboral")
  }
  primasLegales(){
    console.log("primasLegales")
  }
  primasConvecionales(){
    console.log("primasConvecionales")
  }
  cesantiasEIntereses(){
    console.log("cesantiasEIntereses")
  }
  miHistorialDePemisos(){
    console.log("miHistorialDePemisos")
  }
  mihistorialDeIncapacidad(){
    console.log("mihistorialDeIncapacidad")
  }
  miNivelDeEndeundamiento(){
    console.log("miNivelDeEndeundamiento")
  }
}
