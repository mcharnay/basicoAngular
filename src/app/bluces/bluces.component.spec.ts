import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlucesComponent } from './bluces.component';

describe('BlucesComponent', () => {
  let component: BlucesComponent;
  let fixture: ComponentFixture<BlucesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlucesComponent]
    });
    fixture = TestBed.createComponent(BlucesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
