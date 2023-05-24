import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GebaeudeplanerComponent } from './gebaeudeplaner.component';

describe('GebaeudeplanerComponent', () => {
  let component: GebaeudeplanerComponent;
  let fixture: ComponentFixture<GebaeudeplanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GebaeudeplanerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GebaeudeplanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
