import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneC2Component } from './one-c2.component';

describe('OneC2Component', () => {
  let component: OneC2Component;
  let fixture: ComponentFixture<OneC2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneC2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
