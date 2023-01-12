import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';
import { PersonaServicio } from '../persona.servicio';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  persona:Persona;
  constructor(private personaService:PersonaServicio, private router:Router){}

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

  openLogin(){
    this.router.navigate(['/login']);
  }
}
