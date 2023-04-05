import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleLocationMapComponent } from './google-location-map.component';

describe('GoogleLocationMapComponent', () => {
  let component: GoogleLocationMapComponent;
  let fixture: ComponentFixture<GoogleLocationMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleLocationMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleLocationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
