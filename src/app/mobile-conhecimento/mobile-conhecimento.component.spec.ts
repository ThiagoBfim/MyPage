import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileConhecimentoComponent } from './mobile-conhecimento.component';

describe('MobileConhecimentoComponent', () => {
  let component: MobileConhecimentoComponent;
  let fixture: ComponentFixture<MobileConhecimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileConhecimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileConhecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
