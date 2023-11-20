import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheuserComponent } from './theuser.component';

describe('TheuserComponent', () => {
  let component: TheuserComponent;
  let fixture: ComponentFixture<TheuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheuserComponent]
    });
    fixture = TestBed.createComponent(TheuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
