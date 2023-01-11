import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Work } from './work.model';
import { WorkServicio } from './work.servicio';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit{

  expLab : Work = null;

  constructor(private sExperiencia : WorkServicio, private activatedRouter: ActivatedRoute, private router : Router){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data => {
        this.expLab = data;
      }, err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        this.router.navigate(['']);
      }
    )
  }
}
