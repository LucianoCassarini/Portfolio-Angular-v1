import { Component, OnInit } from '@angular/core';
import { Acreditation } from './acreditations.model';
import { EducacionService } from './educacion.service';

@Component({
  selector: 'app-acreditations',
  templateUrl: './acreditations.component.html',
  styleUrls: ['./acreditations.component.css']
})
export class AcreditationsComponent implements OnInit{
  educacion:Acreditation[] = [];

  constructor(private educacionS:EducacionService){}

  isLogged = false;

  ngOnInit(){
    this.cargarEducacion();
    
  }

  cargarEducacion():void{
    this.educacionS.lista().subscribe(
      data => {
        this.educacion = data;
      }
    )
  }

  delete(id?:number){
    if(id != undefined){
      this.educacionS.delete(id).subscribe(
        data =>{
          this.cargarEducacion();
        }, err =>{
          //alert("No se pudo eliminar");
          this.cargarEducacion();
        }
      )
    }
  }
}
