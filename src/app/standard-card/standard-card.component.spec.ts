import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardCardComponent } from './standard-card.component';

describe('StandardCardComponent', () => {
  let component: StandardCardComponent;
  let fixture: ComponentFixture<StandardCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
