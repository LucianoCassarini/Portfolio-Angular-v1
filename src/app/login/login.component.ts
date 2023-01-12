import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';
import { PersonaServicio } from '../persona.servicio';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario : string = '';
  contrasena : string = '';
  persona:Persona;

  constructor(private personaService:PersonaServicio, private loginService:LoginService, private router:Router){}

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(
      data => {
        this.persona = data
      }
    )
  }

  onValidarUsuario() : void{
    console.log(this.persona.usuario);
    console.log(this.usuario)
    if (this.persona.usuario == this.usuario && this.persona.contrasena == this.contrasena){
      this.loginService.cambiarEstado(true);
      this.router.navigate(['']);
    }else{
      alert("El usuario o la contraseña ingresados no son correctos");
    }
  }

}
