import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingTestComponent } from './binding-test.component';

describe('BindingTestComponent', () => {
  let component: BindingTestComponent;
  let fixture: ComponentFixture<BindingTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
