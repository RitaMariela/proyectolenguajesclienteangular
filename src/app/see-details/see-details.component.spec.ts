import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeDetailsComponent } from './see-details.component';

describe('SeeDetailsComponent', () => {
  let component: SeeDetailsComponent;
  let fixture: ComponentFixture<SeeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
