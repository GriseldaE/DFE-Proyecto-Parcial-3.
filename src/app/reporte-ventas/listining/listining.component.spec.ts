import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListiningComponent } from './listining.component';

describe('ListiningComponent', () => {
  let component: ListiningComponent;
  let fixture: ComponentFixture<ListiningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListiningComponent]
    });
    fixture = TestBed.createComponent(ListiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
