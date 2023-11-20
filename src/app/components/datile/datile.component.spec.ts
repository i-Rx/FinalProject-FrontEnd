import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatileComponent } from './datile.component';

describe('DatileComponent', () => {
  let component: DatileComponent;
  let fixture: ComponentFixture<DatileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatileComponent]
    });
    fixture = TestBed.createComponent(DatileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
