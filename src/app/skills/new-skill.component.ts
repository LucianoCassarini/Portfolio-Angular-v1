import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from './skills.model';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css'],
})
export class NewSkillComponent {
  nombre: string;
  porcentaje: number;
  color: string;

  constructor(private skillS: SkillsService, private router:Router) {}

  public onCreate(): void{
    const skill = new Skill(this.nombre, this.porcentaje, this.color);
    this.skillS.save(skill).subscribe(
      data => {
        alert("Skill creardo correctamente");
        this.router.navigate(['']);
      }, err =>{
        //alert("Falló al crear la skill");
        this.router.navigate(['']);
      }
    )
  }
}
