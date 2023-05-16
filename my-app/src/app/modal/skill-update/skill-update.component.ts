import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skill-update',
  templateUrl: './skill-update.component.html',
  styleUrls: ['./skill-update.component.css']
})
export class SkillUpdateComponent implements OnInit{
  form:FormGroup;
  skill:Skill = new Skill('',0);

  constructor(private formBuilder:FormBuilder, 
    private SkillsService:SkillsService,
    private activatedRoute:ActivatedRoute,
    private router:Router){
      this.form = formBuilder.group(
       {
        id_skill:[''],
        name_skill:['',[ Validators.required]],
        level:['',[ Validators.required, Validators.min(0), Validators.max(100)]]
        }
      )
    }

  ngOnInit(): void {
      const id_skill = this.activatedRoute.snapshot.params['id_skill'];
      this.SkillsService.findSkill( id_skill).subscribe(data =>{
        this.skill = data;
      }
    );    
  }

  get Name_Skill(){
    return this.form.get( 'name_skill');
  }
 
  get Level(){
    return this.form.get( 'level');
  } 

  onUpdate( event:Event):void{
    event.preventDefault;
    this.SkillsService.updateSkill( this.form.value).subscribe(data =>{
      this.router.navigate(['']);
    } ,error => {
      alert("Ocurrio un error al actualizar la habilidad!");
      }
    )
  }
}
