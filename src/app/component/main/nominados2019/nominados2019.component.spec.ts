import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nominados2019Component } from './nominados2019.component';

describe('Nominados2019Component', () => {
  let component: Nominados2019Component;
  let fixture: ComponentFixture<Nominados2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nominados2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nominados2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
