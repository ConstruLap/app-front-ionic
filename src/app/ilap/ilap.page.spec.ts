import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlapPage } from './ilap.page';

describe('IlapPage', () => {
  let component: IlapPage;
  let fixture: ComponentFixture<IlapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
