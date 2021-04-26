import { Injectable } from '@angular/core';
import { ApiCallerService } from './api-caller.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tipo:string = 'login';
  constructor(private apilista : ApiCallerService) { }

  async login(form){
    let result = await this.apilista.apiListas(form,this.tipo);
    return result;
  }
}
