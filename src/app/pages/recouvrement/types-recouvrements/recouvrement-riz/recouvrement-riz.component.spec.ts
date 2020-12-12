import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecouvrementRizComponent } from './recouvrement-riz.component';

describe('RecouvrementRizComponent', () => {
  let component: RecouvrementRizComponent;
  let fixture: ComponentFixture<RecouvrementRizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecouvrementRizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecouvrementRizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
