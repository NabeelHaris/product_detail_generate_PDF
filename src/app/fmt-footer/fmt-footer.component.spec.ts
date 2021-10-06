import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmtFooterComponent } from './fmt-footer.component';

describe('FmtFooterComponent', () => {
  let component: FmtFooterComponent;
  let fixture: ComponentFixture<FmtFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmtFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmtFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
