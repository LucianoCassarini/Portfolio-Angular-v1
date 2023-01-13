import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { Proyecto } from './proyecto.model';
import { ProyectoServicios } from './proyecto.servicio';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  proyectos:Proyecto[];

  constructor(private proyectoServicio:ProyectoServicios, private router : Router, public loginService:LoginService){}
  
  isLogged = this.loginService.getToken();

  ngOnInit(){
    this.cargarProyectos();
  }

  cargarProyectos():void{
    this.proyectoServicio.lista().subscribe(
      data => {this.proyectos = data;}
    )
  }

  delete(id:number){
    if(id != undefined){
      this.proyectoServicio.delete(id).subscribe(
        data => {
          this.cargarProyectos();
          this.router.navigate(['']);
        }, err =>{
          this.cargarProyectos();
          this.router.navigate(['']);
        }
      )
    }
  }
}
