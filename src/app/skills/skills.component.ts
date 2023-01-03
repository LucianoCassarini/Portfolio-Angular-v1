import { Component, OnInit } from '@angular/core';
import { Skill } from './skills.model';
import { SkillServicios } from './skills.servicio';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skills:Skill[];

  constructor(private skillServicio:SkillServicios){}

  ngOnInit(){
      this.skills = this.skillServicio.skills;
  }

}
