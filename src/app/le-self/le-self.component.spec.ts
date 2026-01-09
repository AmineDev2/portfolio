import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeSelfComponent } from './le-self.component';

describe('LeSelfComponent', () => {
  let component: LeSelfComponent;
  let fixture: ComponentFixture<LeSelfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeSelfComponent]
    });
    fixture = TestBed.createComponent(LeSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
