import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneC1Component } from './one-c1.component';

describe('OneC1Component', () => {
  let component: OneC1Component;
  let fixture: ComponentFixture<OneC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneC1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
