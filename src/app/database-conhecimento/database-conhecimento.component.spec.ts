import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseConhecimentoComponent } from './database-conhecimento.component';

describe('DatabaseConhecimentoComponent', () => {
  let component: DatabaseConhecimentoComponent;
  let fixture: ComponentFixture<DatabaseConhecimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseConhecimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseConhecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
