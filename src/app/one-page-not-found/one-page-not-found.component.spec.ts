import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePageNotFoundComponent } from './one-page-not-found.component';

describe('OnePageNotFoundComponent', () => {
  let component: OnePageNotFoundComponent;
  let fixture: ComponentFixture<OnePageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnePageNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
