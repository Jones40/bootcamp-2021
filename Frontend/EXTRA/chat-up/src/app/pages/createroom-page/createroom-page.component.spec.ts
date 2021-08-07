import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateroomPageComponent } from './createroom-page.component';

describe('CreateroomPageComponent', () => {
  let component: CreateroomPageComponent;
  let fixture: ComponentFixture<CreateroomPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateroomPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateroomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
