import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrowingComponent } from './throwing.component';

describe('ThrowingComponent', () => {
  let component: ThrowingComponent;
  let fixture: ComponentFixture<ThrowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThrowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
