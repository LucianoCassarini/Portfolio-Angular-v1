import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonaServicio } from '../persona.servicio';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  persona:Persona;
  constructor(private personaServicio:PersonaServicio){}

  ngOnInit(): void {
      this.persona = this.personaServicio.persona;
  }
}
