import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-politicas',
  templateUrl: './politicas.page.html',
  styleUrls: ['./politicas.page.scss'],
})
export class PoliticasPage implements OnInit {
  politicaInfo:any
  constructor(private storage : TemporalMovilStoreService,
              private router : Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.politicaInfo = [

      {
        
        nombre:"nombre de la politica 1",
        id:"id politica 1",
        fecha:"2021-04-12",
        area: "GESTION DE LO HUMANO"
      },
      {
        
        nombre:"nombre politica 2",
        id:"id politica 2",
        fecha:"2021-04-17",
        area:"INGENIERIA DE PROCESOS"

      },
    ]
      

    
  }

  carteleraDetalle(politicaInfo){
    console.log("Cartelera detalle");
    console.log(politicaInfo);
    this.storage.getInfoPolitica(politicaInfo);
    this.router.navigate(['/politicas-detalle'])
  }
}
