import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acreditation } from './acreditations.model';
import { EducacionService } from './educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit{
  nombreEdu : string  = '';
  descripcionEdu : string  = '';
  fechaEdu : string = '';
  urlImagenEdu : string = '';

  constructor(private educacionS:EducacionService, private router:Router){}

  ngOnInit(): void {
      
  }

  onCreate():void{
    const educacion = new Acreditation(this.nombreEdu, this.descripcionEdu, this.fechaEdu, this.urlImagenEdu);
    this.educacionS.save(educacion).subscribe(
      data => {
        alert("Educacion añadida");
        this.router.navigate(['']);
      }, err => {
        //alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
