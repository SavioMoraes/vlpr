import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeAfterGallery } from './before-after-gallery';

describe('BeforeAfterGallery', () => {
  let component: BeforeAfterGallery;
  let fixture: ComponentFixture<BeforeAfterGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeforeAfterGallery],
    }).compileComponents();

    fixture = TestBed.createComponent(BeforeAfterGallery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
