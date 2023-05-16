import { Component, OnInit } from '@angular/core';
//import { PortfolioService } from 'src/app/services/portfolio.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skillList:any[] = [];

  constructor (private skillsService:SkillsService){}

  ngOnInit(): void {
    this.updateSkill();
  }
  
  deleteSkill( id_skill:number){
    if (id_skill != undefined){
      this.skillsService.deleteSkill( id_skill).subscribe(
        data => {
          this.updateSkill();
        } ,error => {
          window.location.reload();
        }
      );
    };
  }

  updateSkill(): void{
    this.skillsService.getDataSkill().subscribe(data =>{
      console.log(data);
      this.skillList = data;
    });
  }
}
