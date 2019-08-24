import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllTopupRequestsComponent } from './view-all-topup-requests.component';

describe('ViewAllTopupRequestsComponent', () => {
  let component: ViewAllTopupRequestsComponent;
  let fixture: ComponentFixture<ViewAllTopupRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllTopupRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllTopupRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
