import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flipkart2Component } from './flipkart2.component';

describe('Flipkart2Component', () => {
  let component: Flipkart2Component;
  let fixture: ComponentFixture<Flipkart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Flipkart2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Flipkart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
