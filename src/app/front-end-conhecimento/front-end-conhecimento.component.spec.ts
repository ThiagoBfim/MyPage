import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndConhecimentoComponent } from './front-end-conhecimento.component';

describe('FrontEndConhecimentoComponent', () => {
  let component: FrontEndConhecimentoComponent;
  let fixture: ComponentFixture<FrontEndConhecimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontEndConhecimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontEndConhecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
