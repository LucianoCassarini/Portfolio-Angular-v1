import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonaServicio } from '../persona.servicio';

@Component({
  selector: 'app-who-am-i',
  templateUrl: './who-am-i.component.html',
  styleUrls: ['./who-am-i.component.css']
})
export class WhoAmIComponent implements OnInit{
  persona:Persona;

  constructor(private personaServicio:PersonaServicio){}

  ngOnInit(): void {
      this.persona = this.personaServicio.persona;
  }
}
