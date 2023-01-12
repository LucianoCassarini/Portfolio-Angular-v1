import { Component, OnInit } from '@angular/core';
import { Skill } from './skills.model';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skills:Skill[] = [];

  constructor(private skillS:SkillsService){}

  isLogged = false;

  ngOnInit(){
    this.cargarSkills();
  }

  porcentajeToString(skill : Skill){
    return skill.porcentaje + '%';
  }

  cargarSkills():void{
    this.skillS.lista().subscribe(
      data => {
        this.skills = data;
      }
    )
  }

  delete(id:number){
    if(id!=undefined){
      this.skillS.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          //alert("No se pudo borrar la skill");
          this.cargarSkills();
        }
      )
    }
  }

}
