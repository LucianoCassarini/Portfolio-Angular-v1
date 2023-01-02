import { Component, OnInit } from '@angular/core';
import { Acreditation } from './acreditations.model';
import { AcreditationServicio } from './acreditations.servicio';

@Component({
  selector: 'app-acreditations',
  templateUrl: './acreditations.component.html',
  styleUrls: ['./acreditations.component.css']
})
export class AcreditationsComponent implements OnInit{
  acreditations:Acreditation[];

  constructor(private acreditationsServicio:AcreditationServicio){}

  ngOnInit(){
      this.acreditations = this.acreditationsServicio.acreditations;
  }
}
