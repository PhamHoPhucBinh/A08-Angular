import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUdpateComponent } from './product-udpate.component';

describe('ProductUdpateComponent', () => {
  let component: ProductUdpateComponent;
  let fixture: ComponentFixture<ProductUdpateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductUdpateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUdpateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
