import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowvacationComponent } from './showvacation.component';

describe('ShowvacationComponent', () => {
  let component: ShowvacationComponent;
  let fixture: ComponentFixture<ShowvacationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowvacationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowvacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
