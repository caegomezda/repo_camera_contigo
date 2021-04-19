import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-registro-cena',
  templateUrl: './registro-cena.page.html',
  styleUrls: ['./registro-cena.page.scss'],
})
export class RegistroCenaPage implements OnInit {
  listaInfocena:any
  constructor(private storage : TemporalMovilStoreService,
              private router : Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.listaInfocena = [

      {
        
        dia:"lunes",
        id:"id cena 1",
        fecha:"2021-04-12",
        detalle: "Solo fruta"
      },
      {
        
        dia:"lunes",
        id:"id cena 2",
        fecha:"2021-04-17",
        detalle:"COMBINADO"

      },
      {
        
        dia:"martes",
        id:"id cena 3",
        fecha:"2021-04-17",
        detalle:"TRADICIONAL"

      },
      {
        
        dia:"martes",
        id:"id cena 4",
        fecha:"2021-04-17",
        detalle:"TRADICIONAL"

      }
    ]
      

    
    }

  carteleraDetalle(cena){
    console.log("Cartelera detalle");
    console.log(cena);
    this.storage.getInfoCena(cena);
    this.router.navigate(['/registro-cena-detalle'])
  }

}
