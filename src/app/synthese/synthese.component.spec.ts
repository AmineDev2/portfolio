import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntheseComponent } from './synthese.component';

describe('SyntheseComponent', () => {
  let component: SyntheseComponent;
  let fixture: ComponentFixture<SyntheseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SyntheseComponent]
    });
    fixture = TestBed.createComponent(SyntheseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
