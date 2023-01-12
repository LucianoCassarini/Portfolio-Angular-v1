import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../persona.model';
import { PersonaServicio } from '../persona.servicio';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {
  persona: Persona = null;

  constructor(private personaS : PersonaServicio,private activatedRouter:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }
  onUpdate() : void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.update(id, this.persona).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event : any){}
}
