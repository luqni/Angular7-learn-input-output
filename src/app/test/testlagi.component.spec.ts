import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestlagiComponent } from './testlagi.component';

describe('TestlagiComponent', () => {
  let component: TestlagiComponent;
  let fixture: ComponentFixture<TestlagiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestlagiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestlagiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
