import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecouvrementAssuranceComponent } from './recouvrement-assurance.component';

describe('RecouvrementAssuranceComponent', () => {
  let component: RecouvrementAssuranceComponent;
  let fixture: ComponentFixture<RecouvrementAssuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecouvrementAssuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecouvrementAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
