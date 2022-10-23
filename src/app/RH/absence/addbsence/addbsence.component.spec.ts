import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbsenceComponent } from './addbsence.component';

describe('AddbsenceComponent', () => {
  let component: AddbsenceComponent;
  let fixture: ComponentFixture<AddbsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
