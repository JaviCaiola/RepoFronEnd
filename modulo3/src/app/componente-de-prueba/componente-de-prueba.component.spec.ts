import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDePruebaComponent } from './componente-de-prueba.component';

describe('ComponenteDePruebaComponent', () => {
  let component: ComponenteDePruebaComponent;
  let fixture: ComponentFixture<ComponenteDePruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteDePruebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteDePruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
