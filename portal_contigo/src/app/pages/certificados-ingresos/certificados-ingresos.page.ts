import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificados-ingresos',
  templateUrl: './certificados-ingresos.page.html',
  styleUrls: ['./certificados-ingresos.page.scss'],
})
export class CertificadosIngresosPage implements OnInit {
  listaYearsCertificados:any =['2018','2019','2020','2021'];
  constructor() { }

  ngOnInit() {
  }
  generarDocumento(){
    console.log("Generar certificado");
  }
}
