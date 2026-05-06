import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseCleaning } from './house-cleaning';

describe('HouseCleaning', () => {
  let component: HouseCleaning;
  let fixture: ComponentFixture<HouseCleaning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseCleaning],
    }).compileComponents();

    fixture = TestBed.createComponent(HouseCleaning);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
