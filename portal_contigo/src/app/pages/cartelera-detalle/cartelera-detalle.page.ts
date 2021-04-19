import { Component, OnInit } from '@angular/core';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-cartelera-detalle',
  templateUrl: './cartelera-detalle.page.html',
  styleUrls: ['./cartelera-detalle.page.scss'],
})
export class CarteleraDetallePage implements OnInit {
  infoCartelera:any;
  isLoad:Boolean =  false;
  constructor(private storage : TemporalMovilStoreService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getCarteleraInfo()
  }

  async getCarteleraInfo(){
   let result = await this.storage.sendInfoCartelera();
   console.log("result cartelera detalle", result);
   this.isLoad = true
   this.infoCartelera = result
  }

  descargarImagen(){
    console.log("Descargar Documento")
  }
}
