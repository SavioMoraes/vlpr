import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Airbnb } from './airbnb';

describe('Airbnb', () => {
  let component: Airbnb;
  let fixture: ComponentFixture<Airbnb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Airbnb],
    }).compileComponents();

    fixture = TestBed.createComponent(Airbnb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
