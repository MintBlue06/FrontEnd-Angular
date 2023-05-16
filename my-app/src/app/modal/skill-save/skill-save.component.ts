import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from 'src/app/models/skill';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skill-save',
  templateUrl: './skill-save.component.html',
  styleUrls: ['./skill-save.component.css']
})
export class SkillSaveComponent implements OnInit{
  form:FormGroup;
  name_skill = '';
  level = 0;

  constructor(private formBuilder:FormBuilder, private skillsService:SkillsService){
    this.form = formBuilder.group(
      {
        name_skill:['',[ Validators.required]],
        level:['',[ Validators.required, Validators.min(0), Validators.max(100)]]
      }
    )
  }

  ngOnInit(): void {}

  get Name_Skill(){
    return this.form.get( 'name_skill');
  }
  get Level(){
    return this.form.get( 'level');
  }

  get Name_SkillValid(){
    return this.Name_Skill?.touched && !this.Name_Skill.valid;
  } 
  get LevelValid(){
    return this.Level?.touched && !this.Level.valid;
  } 

  onSave( event:Event):void{
    const skill = new Skill(this.name_skill, this.level);
    this.skillsService.saveSkill( skill).subscribe(data =>{
      window.location.reload();
    } ,error => {
      alert("Ocurrio un error al gurdar la habilidad!");
      this.form.reset();
      }
    )
  }

  clean():void{
    this.form.reset();
  } 
}
