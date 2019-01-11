import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineLearningConhecimentoComponent } from './machine-learning-conhecimento.component';

describe('MachineLearningConhecimentoComponent', () => {
  let component: MachineLearningConhecimentoComponent;
  let fixture: ComponentFixture<MachineLearningConhecimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineLearningConhecimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineLearningConhecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
