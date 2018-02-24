import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndConhecimentoComponent } from './back-end-conhecimento.component';

describe('BackEndConhecimentoComponent', () => {
  let component: BackEndConhecimentoComponent;
  let fixture: ComponentFixture<BackEndConhecimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackEndConhecimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackEndConhecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
