import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonaServicio } from '../persona.servicio';
import { PersonaPrueba } from '../prueba/persona-prueba.model';
import { PersonaPruebaService } from '../prueba/persona-prueba.service.ts.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit{
  // persona:Persona;

  // constructor(private personaServicio:PersonaServicio){}

  // ngOnInit(): void {
  //     this.persona = this.personaServicio.persona;
  // }

  persona : PersonaPrueba = new PersonaPrueba("","","");
  
  constructor(public personaPService :PersonaPruebaService){}

  ngOnInit(): void {
      this.personaPService.getPersona().subscribe(data => {this.persona = data})
  }
}
