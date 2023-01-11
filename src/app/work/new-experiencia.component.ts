import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkServicio } from './work.servicio';
import { Work } from './work.model';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit{
  nombreE : string  = '';
  descripcionE : string  = '';
  fecha : string = '';
  urlImagenE : string = '';

  constructor(private sExperiencia:WorkServicio, private router:Router){

  }

  ngOnInit(): void {
      
  }

  onCreate():void{
    const expe = new Work(this.nombreE, this.descripcionE, this.fecha, this.urlImagenE);
    this.sExperiencia.save(expe).subscribe(data=>{
      alert("Exeriencia añadida");
      this.router.navigate(['']);
    }, err =>{
      //alert("Falló");
      this.router.navigate(['']);
    }
    )
  }
}
