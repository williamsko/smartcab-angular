import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecouvrementCarburantComponent } from './recouvrement-carburant.component';

describe('RecouvrementCarburantComponent', () => {
  let component: RecouvrementCarburantComponent;
  let fixture: ComponentFixture<RecouvrementCarburantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecouvrementCarburantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecouvrementCarburantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
