import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItaComponent } from './ita.component';

describe('ItaComponent', () => {
  let component: ItaComponent;
  let fixture: ComponentFixture<ItaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
