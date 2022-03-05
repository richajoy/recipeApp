import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionInfoComponent } from './nutrition-info.component';

describe('NutritionInfoComponent', () => {
  let component: NutritionInfoComponent;
  let fixture: ComponentFixture<NutritionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
