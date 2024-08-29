import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MylawyersComponent } from './mylawyers.component';

describe('MylawyersComponent', () => {
  let component: MylawyersComponent;
  let fixture: ComponentFixture<MylawyersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MylawyersComponent]
    });
    fixture = TestBed.createComponent(MylawyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
