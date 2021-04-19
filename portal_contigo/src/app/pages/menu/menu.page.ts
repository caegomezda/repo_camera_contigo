import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemporalMovilStoreService } from 'src/app/services/temporal-movil-store.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  isload:Boolean = false;
  constructor(private router: Router,
              private getInfoStore: TemporalMovilStoreService) { }

  ngOnInit() {
    this.getInfoUsuStore()
  }

  misPendientes(){
    console.log("Mis Pendientes");
    this.router.navigate(['/mis-pendientes'])
  }

  solicitudes(){
    console.log("Solicitudes");
    this.router.navigate(['/solicitudes'])

  }

  consultas(){
    console.log("Consultas");
    this.router.navigate(['/consultas'])

  }

  cartelera(){
    console.log("Cartelera");
    this.router.navigate(['/cartelera'])

  }

  politicas(){
    console.log("Políticas");
    this.router.navigate(['/politicas'])

  }

  preguntas(){
    console.log("Preguntas");
    this.router.navigate(['/preguntas'])

  }

  cambiarContrasena(){
    console.log("Cambiar Contraseña");
    this.router.navigate(['/cambiar-contrasena'])

  }

  aulaVirtual(){
    console.log("Aula Virtual");

  }

  aprobaciones(){
    console.log("Aprobaciones");
    this.router.navigate(['/aprobaciones'])

  }

  registroCena(){
    console.log("Registro Cena");
    this.router.navigate(['/registro-cena']);
  }

  chat(){
    console.log("Chat");
  }

  formularioCovid(){
    console.log("FormularioCovid");
  }

  getInfoUsuStore(){
    let result = this.getInfoStore.sendInfoUsuario()
    console.log("Info Usu en menu",result);
  }
}
