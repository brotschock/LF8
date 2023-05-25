import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringtestComponent } from './stringtest.component';

describe('StringtestComponent', () => {
  let component: StringtestComponent;
  let fixture: ComponentFixture<StringtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringtestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
