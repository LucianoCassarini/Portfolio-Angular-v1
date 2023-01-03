import { Component, OnInit } from '@angular/core';
import { Proyecto } from './proyecto.model';
import { ProyectoServicios } from './proyecto.servicio';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  proyectos:Proyecto[];

  constructor(private proyectoServicios:ProyectoServicios){}
  
  ngOnInit(){
    this.proyectos = this.proyectoServicios.proyectos;   
  }
}
