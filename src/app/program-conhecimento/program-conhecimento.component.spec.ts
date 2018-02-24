import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramConhecimentoComponent } from './program-conhecimento.component';

describe('ProgramConhecimentoComponent', () => {
  let component: ProgramConhecimentoComponent;
  let fixture: ComponentFixture<ProgramConhecimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramConhecimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramConhecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
