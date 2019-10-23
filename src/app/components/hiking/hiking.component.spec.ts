import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikingComponent } from './hiking.component';

describe('HikingComponent', () => {
  let component: HikingComponent;
  let fixture: ComponentFixture<HikingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HikingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
