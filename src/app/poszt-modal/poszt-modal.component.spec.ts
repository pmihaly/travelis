import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosztModalComponent } from './poszt-modal.component';

describe('PosztModalComponent', () => {
  let component: PosztModalComponent;
  let fixture: ComponentFixture<PosztModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosztModalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosztModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
