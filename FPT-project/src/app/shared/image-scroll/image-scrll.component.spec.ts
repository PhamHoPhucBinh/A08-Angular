import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageScrllComponent } from './image-scrll.component';

describe('ImageScrllComponent', () => {
  let component: ImageScrllComponent;
  let fixture: ComponentFixture<ImageScrllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageScrllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageScrllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
