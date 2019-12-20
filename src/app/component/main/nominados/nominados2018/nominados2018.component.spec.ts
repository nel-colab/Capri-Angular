import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nominados2018Component } from './nominados2018.component';

describe('Nominados2018Component', () => {
  let component: Nominados2018Component;
  let fixture: ComponentFixture<Nominados2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nominados2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nominados2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
