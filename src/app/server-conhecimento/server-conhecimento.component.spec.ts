import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerConhecimentoComponent } from './server-conhecimento.component';

describe('ServerConhecimentoComponent', () => {
  let component: ServerConhecimentoComponent;
  let fixture: ComponentFixture<ServerConhecimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerConhecimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerConhecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
