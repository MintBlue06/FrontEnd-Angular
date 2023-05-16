import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  url = "http://localhost:8080/api/habilidad";

  constructor(private http:HttpClient) { }

  public getDataSkill():Observable<any>{
    return this.http.get<any>( this.url);
  }

  public saveSkill( skill:Skill):Observable<any> {
    return this.http.post<any>( this.url,skill);
  }

  public deleteSkill( id_skill:number):Observable<any> {
    return this.http.delete<any>( this.url + `/${id_skill}`);
  }

  public findSkill( id_skill:number):Observable<any> {
    return this.http.get<any>( this.url + `/${id_skill}`);
  }

  public updateSkill( skill:Skill):Observable<any> {
    return this.http.put<any>( this.url,skill);
  }
}
