import { Component, OnInit } from '@angular/core';
import { Worked } from './worked.model';
import { WorkedServicios } from './worked.servicio';

@Component({
  selector: 'app-worked',
  templateUrl: './worked.component.html',
  styleUrls: ['./worked.component.css']
})
export class WorkedComponent implements OnInit{
  worked:Worked[];

  constructor(private workedServicio:WorkedServicios){}

  ngOnInit(){
    this.worked = this.workedServicio.tecnologias
  }
}
