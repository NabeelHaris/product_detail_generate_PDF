import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmtHeaderComponent } from './fmt-header.component';

describe('FmtHeaderComponent', () => {
  let component: FmtHeaderComponent;
  let fixture: ComponentFixture<FmtHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmtHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmtHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
