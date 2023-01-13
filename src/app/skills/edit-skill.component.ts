import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from './skills.model';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css'],
})
export class EditSkillComponent implements OnInit {
  skill: Skill = null;

  constructor(
    private skillS: SkillsService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.skillS.details(id).subscribe(
      (data) => {
        this.skill = data;
      },
      (err) => {
        //alert("Error al  modificar")
        this.router.navigate(['']);
      }
    );
  }

  onUpdate() {
    const id = this.activateRouter.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        //alert("Error al  modificar")
        this.router.navigate(['']);
      }
    );
  }
}
