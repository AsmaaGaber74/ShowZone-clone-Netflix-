import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovidetailsComponent } from './movidetails.component';

describe('MovidetailsComponent', () => {
  let component: MovidetailsComponent;
  let fixture: ComponentFixture<MovidetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovidetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovidetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
