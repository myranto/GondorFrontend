import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilLayoutComponent } from './accueil-layout.component';

describe('AccueilLayoutComponent', () => {
  let component: AccueilLayoutComponent;
  let fixture: ComponentFixture<AccueilLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
