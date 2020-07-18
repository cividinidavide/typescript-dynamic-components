import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuComponent } from './deu.component';

describe('DeuComponent', () => {
  let component: DeuComponent;
  let fixture: ComponentFixture<DeuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
