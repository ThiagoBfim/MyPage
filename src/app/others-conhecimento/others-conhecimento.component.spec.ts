import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersConhecimentoComponent } from './others-conhecimento.component';

describe('OthersConhecimentoComponent', () => {
  let component: OthersConhecimentoComponent;
  let fixture: ComponentFixture<OthersConhecimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthersConhecimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersConhecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
