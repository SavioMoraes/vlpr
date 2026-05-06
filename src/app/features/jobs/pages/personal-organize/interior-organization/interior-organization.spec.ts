import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorOrganization } from './interior-organization';

describe('InteriorOrganization', () => {
  let component: InteriorOrganization;
  let fixture: ComponentFixture<InteriorOrganization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteriorOrganization],
    }).compileComponents();

    fixture = TestBed.createComponent(InteriorOrganization);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
