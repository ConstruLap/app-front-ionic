import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsinarPage } from './ensinar.page';

describe('EnsinarPage', () => {
  let component: EnsinarPage;
  let fixture: ComponentFixture<EnsinarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsinarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsinarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
