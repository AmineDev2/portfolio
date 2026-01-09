import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGenericComponent } from './header-generic.component';

describe('HeaderGenericComponent', () => {
  let component: HeaderGenericComponent;
  let fixture: ComponentFixture<HeaderGenericComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderGenericComponent]
    });
    fixture = TestBed.createComponent(HeaderGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
