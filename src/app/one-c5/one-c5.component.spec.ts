import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneC5Component } from './one-c5.component';

describe('OneC5Component', () => {
  let component: OneC5Component;
  let fixture: ComponentFixture<OneC5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneC5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneC5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
