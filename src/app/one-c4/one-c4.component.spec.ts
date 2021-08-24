import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneC4Component } from './one-c4.component';

describe('OneC4Component', () => {
  let component: OneC4Component;
  let fixture: ComponentFixture<OneC4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneC4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneC4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
