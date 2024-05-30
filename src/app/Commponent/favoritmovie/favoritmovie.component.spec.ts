import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritmovieComponent } from './favoritmovie.component';

describe('FavoritmovieComponent', () => {
  let component: FavoritmovieComponent;
  let fixture: ComponentFixture<FavoritmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritmovieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoritmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
