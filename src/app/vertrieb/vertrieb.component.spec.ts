import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertriebComponent } from './vertrieb.component';

describe('VertriebComponent', () => {
  let component: VertriebComponent;
  let fixture: ComponentFixture<VertriebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VertriebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VertriebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
