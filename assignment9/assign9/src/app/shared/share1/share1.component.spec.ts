import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Share1Component } from './share1.component';

describe('Share1Component', () => {
  let component: Share1Component;
  let fixture: ComponentFixture<Share1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Share1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Share1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
