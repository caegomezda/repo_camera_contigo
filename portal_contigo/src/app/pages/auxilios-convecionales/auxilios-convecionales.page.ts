import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auxilios-convecionales',
  templateUrl: './auxilios-convecionales.page.html',
  styleUrls: ['./auxilios-convecionales.page.scss'],
})
export class AuxiliosConvecionalesPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  tomarFoto(){
    console.log("Tomar foto")
  }
  verRequsitos(){
    console.log("Ver requistos")
    this.router.navigate(['/requesitos-solicitudes'])

  }
}
