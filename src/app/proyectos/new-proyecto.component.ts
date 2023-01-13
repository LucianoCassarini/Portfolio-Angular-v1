import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from './proyecto.model';
import { ProyectoServicios } from './proyecto.servicio';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css'],
})
export class NewProyectoComponent implements OnInit {
  nombre: string;
  descripcion: string;
  urlHost: string;
  urlGit: string;
  urlImagen: string;

  constructor(private sProyecto:ProyectoServicios, private router:Router) {}

  ngOnInit(): void {

  }

  onCreate():void{
    const proyecto = new Proyecto(this.nombre, this.descripcion, this.urlHost, this.urlGit, this.urlImagen);
    this.sProyecto.save(proyecto).subscribe(data=>{
      alert("Exeriencia añadida");
      this.router.navigate(['']);
    }, err =>{
      //alert("Falló");
      this.router.navigate(['']);
    }
    )
  }
}
