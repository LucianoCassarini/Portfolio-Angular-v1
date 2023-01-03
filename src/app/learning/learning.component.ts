import { Component, OnInit } from '@angular/core';
import { LearningServicios } from './learning.servicio';
import { Tecnologia } from './tecnologias.model';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit{
  tecnologias:Tecnologia[];

  constructor(private tecnologiaServicio:LearningServicios){}

  ngOnInit(){
    this.tecnologias = this.tecnologiaServicio.tecnologias;
  }
}
