import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonaServicio } from '../persona.servicio';

@Component({
  selector: 'app-who-am-i',
  templateUrl: './who-am-i.component.html',
  styleUrls: ['./who-am-i.component.css']
})
export class WhoAmIComponent implements OnInit{
  persona : Persona = null;
  
  constructor(public personaService :PersonaServicio){}

  isLogged = true;

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
}
