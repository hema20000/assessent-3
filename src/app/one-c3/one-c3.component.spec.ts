import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneC3Component } from './one-c3.component';

describe('OneC3Component', () => {
  let component: OneC3Component;
  let fixture: ComponentFixture<OneC3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneC3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneC3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
