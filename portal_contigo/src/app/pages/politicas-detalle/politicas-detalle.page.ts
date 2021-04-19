import { Component, OnInit } from '@angular/core';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-politicas-detalle',
  templateUrl: './politicas-detalle.page.html',
  styleUrls: ['./politicas-detalle.page.scss'],
})
export class PoliticasDetallePage implements OnInit {
  infoPolitica:any;
  isLoad:Boolean = false
  constructor(private storage : TemporalMovilStoreService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getPoliticaInfo()
  }

  async getPoliticaInfo(){
   let result = await this.storage.sendInfoPolitica();
   console.log("result politica detalle", result);
   this.isLoad = true
   this.infoPolitica = result
  }

  descargarImagen(){
    console.log("Descargar Documento")
  }

}
