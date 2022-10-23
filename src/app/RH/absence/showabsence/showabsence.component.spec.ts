import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowabsenceComponent } from './showabsence.component';

describe('ShowabsenceComponent', () => {
  let component: ShowabsenceComponent;
  let fixture: ComponentFixture<ShowabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowabsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
