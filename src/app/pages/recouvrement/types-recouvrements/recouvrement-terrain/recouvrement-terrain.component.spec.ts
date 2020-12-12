import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecouvrementTerrainComponent } from './recouvrement-terrain.component';

describe('RecouvrementTerrainComponent', () => {
  let component: RecouvrementTerrainComponent;
  let fixture: ComponentFixture<RecouvrementTerrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecouvrementTerrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecouvrementTerrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
