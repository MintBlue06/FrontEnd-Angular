import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { SkillUpdateComponent } from './modal/skill-update/skill-update.component';

const routes: Routes = [
  { path:'', component:IndexComponent },
  { path:'login', component:LoginComponent },
  { path:'updateSkill/:id_skill', component:SkillUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
