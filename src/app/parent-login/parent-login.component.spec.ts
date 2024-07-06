import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLoginComponent } from './parent-login.component';

describe('ParentLoginComponent', () => {
  let component: ParentLoginComponent;
  let fixture: ComponentFixture<ParentLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentLoginComponent]
    });
    fixture = TestBed.createComponent(ParentLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
