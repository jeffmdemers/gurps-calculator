import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpingComponent } from './jumping.component';

describe('JumpingComponent', () => {
  let component: JumpingComponent;
  let fixture: ComponentFixture<JumpingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumpingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumpingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
