import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Work } from './work.model';
import { WorkServicio } from './work.servicio';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit{
  works:Work[] = [];

  constructor(private worksServicio:WorkServicio, private router : Router){}

  isLogged = false;

  ngOnInit(){
    this.cargarExperiencia();
    // if(this.logServise.getStatus()){
    //   this.isLogged=true;
    // }

    //Validar login
  }

  cargarExperiencia():void{
    this.worksServicio.lista().subscribe(
      data => {this.works = data;}
    )
  }

  delete(id:number){
    if(id != undefined){
      this.worksServicio.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
          this.router.navigate(['']);
        }, err =>{
          this.cargarExperiencia();
          this.router.navigate(['']);
        }
      )
    }
  }
}
