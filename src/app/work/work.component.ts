import { Component, OnInit } from '@angular/core';
import { Work } from './work.model';
import { WorkServicio } from './work.servicio';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit{
  works:Work[];

  constructor(private worksServicio:WorkServicio){}

  ngOnInit(){
    this.works = this.worksServicio.works;
  }
}
