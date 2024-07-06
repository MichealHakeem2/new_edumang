import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentpageComponent } from './parentpage.component';

describe('ParentpageComponent', () => {
  let component: ParentpageComponent;
  let fixture: ComponentFixture<ParentpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentpageComponent]
    });
    fixture = TestBed.createComponent(ParentpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
