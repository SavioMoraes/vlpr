import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosetOrganization } from './closet-organization';

describe('ClosetOrganization', () => {
  let component: ClosetOrganization;
  let fixture: ComponentFixture<ClosetOrganization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClosetOrganization],
    }).compileComponents();

    fixture = TestBed.createComponent(ClosetOrganization);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
