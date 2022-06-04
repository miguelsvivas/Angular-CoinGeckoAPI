import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingCoinsComponent } from './trending-coins.component';

describe('TrendingCoinsComponent', () => {
  let component: TrendingCoinsComponent;
  let fixture: ComponentFixture<TrendingCoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingCoinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
