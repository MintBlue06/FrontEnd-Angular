import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSaveComponent } from './skill-save.component';

describe('SkillSaveComponent', () => {
  let component: SkillSaveComponent;
  let fixture: ComponentFixture<SkillSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillSaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
