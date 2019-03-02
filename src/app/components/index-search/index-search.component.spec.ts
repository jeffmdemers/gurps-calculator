import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSearchComponent } from './index-search.component';

describe('IndexSearchComponent', () => {
  let component: IndexSearchComponent;
  let fixture: ComponentFixture<IndexSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
