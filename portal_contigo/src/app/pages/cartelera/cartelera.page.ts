import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.page.html',
  styleUrls: ['./cartelera.page.scss'],
})
export class CarteleraPage implements OnInit {
  carteleraInfo:any
  constructor(private storage: TemporalMovilStoreService,
              private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.carteleraInfo = [

      {
        
        nombre:"nombre cartelera 1",
        id:"id cartelera 1",
        fecha:"2021-04-12",
        area: "GESTION DE LO HUMANO"
      },
      {
        
        nombre:"nombre cartelera 2",
        id:"id cartelera 2",
        fecha:"2021-04-17",
        area:"INGENIERIA DE PROCESOS"

      },
    ]
      

    
    }

  carteleraDetalle(carteleraInfo){
    console.log("Cartelera detalle");
    console.log(carteleraInfo);
    this.storage.getInfoCartelera(carteleraInfo);
    this.router.navigate(['/cartelera-detalle'])
  }
}
