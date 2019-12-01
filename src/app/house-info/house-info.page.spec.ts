import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseInfoPage } from './house-info.page';

describe('HouseInfoPage', () => {
  let component: HouseInfoPage;
  let fixture: ComponentFixture<HouseInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
