import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSearchComponent } from './event-search.component';

describe('EventSearchComponent', () => {
  let component: EventSearchComponent;
  let fixture: ComponentFixture<EventSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
