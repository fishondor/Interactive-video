import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicActionComponentComponent } from './dynamic-action-component.component';

describe('DynamicActionComponentComponent', () => {
  let component: DynamicActionComponentComponent;
  let fixture: ComponentFixture<DynamicActionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicActionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicActionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
