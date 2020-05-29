import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular3Component } from './angular3.component';

describe('Angular3Component', () => {
  let component: Angular3Component;
  let fixture: ComponentFixture<Angular3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
