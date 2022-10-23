import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvacationComponent } from './editvacation.component';

describe('EditvacationComponent', () => {
  let component: EditvacationComponent;
  let fixture: ComponentFixture<EditvacationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditvacationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditvacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
