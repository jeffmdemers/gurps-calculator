import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollisionsComponent } from './collisions.component';

describe('CollisionsComponent', () => {
  let component: CollisionsComponent;
  let fixture: ComponentFixture<CollisionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollisionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
