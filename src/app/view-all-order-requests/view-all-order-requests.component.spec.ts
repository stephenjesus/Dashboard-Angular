import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllOrderRequestsComponent } from './view-all-order-requests.component';

describe('ViewAllOrderRequestsComponent', () => {
  let component: ViewAllOrderRequestsComponent;
  let fixture: ComponentFixture<ViewAllOrderRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllOrderRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllOrderRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
