import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeslineAppComponent } from './timesline-app.component';

describe('TimeslineAppComponent', () => {
  let component: TimeslineAppComponent;
  let fixture: ComponentFixture<TimeslineAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeslineAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeslineAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
