import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  tokenAdmin : boolean = false;

  constructor() { }

  public cambiarEstado(estado : boolean) : void{
    this.tokenAdmin = estado;
    if (estado == false){
      window.location.reload();
    }
  }

  public getToken():boolean{
    return this.tokenAdmin;
  }
}
