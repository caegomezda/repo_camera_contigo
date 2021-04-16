import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificado-laboral',
  templateUrl: './certificado-laboral.page.html',
  styleUrls: ['./certificado-laboral.page.scss'],
})
export class CertificadoLaboralPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  conSalarioAdiciones(){
    console.log("con salario adiciones");
  }

  sinSalario(){
    console.log("sin salario");
  }

  conSalario(){
    console.log("con salario");
  }

}
