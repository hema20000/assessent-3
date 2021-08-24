import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSiteLayoutComponent } from './one-site-layout.component';

describe('OneSiteLayoutComponent', () => {
  let component: OneSiteLayoutComponent;
  let fixture: ComponentFixture<OneSiteLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneSiteLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneSiteLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
