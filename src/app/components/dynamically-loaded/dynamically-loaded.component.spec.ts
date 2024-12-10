import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicallyLoadedComponent } from './dynamically-loaded.component';

describe('DynamicallyLoadedComponent', () => {
  let component: DynamicallyLoadedComponent;
  let fixture: ComponentFixture<DynamicallyLoadedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicallyLoadedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicallyLoadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
